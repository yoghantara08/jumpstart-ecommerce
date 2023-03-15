import "dotenv/config";

const config = {
  db: process.env.DB_URL ?? "",
  port: process.env.PORT ?? 8080,
  secretKey: process.env.SECRET_KEY ?? "",
  sessionSecretKey: process.env.SESSION_SECRET_KEY ?? "",
  googleClientID: process.env.GOOGLE_CLIENT_ID ?? "",
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
};

export default config;
