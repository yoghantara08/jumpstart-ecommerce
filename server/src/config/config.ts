import "dotenv/config";

const config = {
  db: process.env.DB_URL,
  port: process.env.PORT ?? 8080,
};

export default config;
