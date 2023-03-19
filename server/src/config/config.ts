import "dotenv/config";

const config = {
  db: process.env.DB_URL ?? "",
  port: process.env.PORT ?? 8080,
  secretKey: process.env.SECRET_KEY ?? "",
  sessionSecretKey: process.env.SESSION_SECRET_KEY ?? "",
  googleClientID: process.env.GOOGLE_CLIENT_ID ?? "",
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
  stripeSecretKey: process.env.STRIPE_SECRET_KEY ?? "",
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY ?? "",
  domain: "http://localhost:3000",
};

export default config;
