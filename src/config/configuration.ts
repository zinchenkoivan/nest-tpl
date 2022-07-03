export default () => ({
  port: process.env.PORT || 3000,
  database: {
    type: process.env.DATABASE_DIALECT,
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'SuperSecretKey',
  },
});
