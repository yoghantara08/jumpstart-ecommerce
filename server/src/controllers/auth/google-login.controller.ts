import { Request } from "express";
import { EProvider } from "../../types/EProvider";
import passport, { DoneCallback, Profile } from "passport";
import jwt from "jsonwebtoken";
import oauth2 from "passport-google-oauth2";
import config from "../../config/config";
import User from "../../models/user.model";

passport.use(
  new oauth2.Strategy(
    {
      clientID: config.googleClientID,
      clientSecret: config.googleClientSecret,
      callbackURL: "http://localhost:8080/api/auth/google/callback",
      passReqToCallback: true,
    },
    async function (
      _request: Request,
      _accessToken: any,
      _refreshToken: any,
      profile: Profile,
      done: DoneCallback
    ) {
      try {
        let email;
        let photo;
        if (profile.emails) {
          email = profile.emails[0].value;
        }
        if (profile.photos) {
          photo = profile.photos[0].value;
        }

        const filter = {
          email,
        };
        const update = {
          email,
          profile: { firstName: profile.displayName, image: photo },
          provider: EProvider.GOOGLE,
        };
        const options = { upsert: true, new: true, setDefaultsOnInsert: true };

        // Find user by email
        const user = await User.findOne({ email });

        if (user) {
          // User with the same email address already exists
          if (user.provider === EProvider.GOOGLE) {
            // User has the Google provider, return user's information with a token
            const token = jwt.sign(
              {
                userId: user._id.toString(),
                email: user.email,
                role: user.role,
              },
              config.secretKey,
              { expiresIn: "1d" }
            );
            return done(null, { token });
          } else {
            // User has a different provider, return an error
            const error = new Error(
              `Email address is already registered with a different provider`
            );
            return done(error);
          }
        } else {
          // Create new user with Google provider
          const newUser = await User.findOneAndUpdate(filter, update, options);

          // Generate JWT Token
          const token = jwt.sign(
            {
              userId: newUser?._id.toString(),
              email: newUser?.email,
              role: newUser?.role,
              isFirstLogin: newUser?.isFirstLogin,
            },
            config.secretKey,
            { expiresIn: "1d" }
          );

          return done(null, { token });
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});
