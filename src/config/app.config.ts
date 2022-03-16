import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  prefix: 'api',
  version: process.env.VERSION,
  port: parseInt(process.env.APP_PORT, 10) || 3000,

  db: {
    keepConnectionAlive: true,
    name: 'default',
    type: 'postgres',
    host: process.env.APP_DB_HOST || 'localhost',
    port: (process.env.APP_DB_PORT && +process.env.APP_DB_PORT) || 5432,
    database: process.env.APP_DB_NAME || 'nest',
    username: process.env.APP_DB_USERNAME || 'user',
    password: process.env.APP_DB_PASSWORD || 'pass',
    extra: {
      ssl: process.env.APP_DB_EXTRA_SSL === 'true',
    },
    entities: [],
  },
}));
