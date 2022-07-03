const path = require('path');
const envConfig = require('dotenv').config({
  path: path.resolve(
    __dirname,
    `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}`,
  ),
});

function env(key) {
  return envConfig.parsed[key] || process.env[key];
}

const baseConfig = {
  type: env('DATABASE_DIALECT'),
  database: env('DATABASE_NAME'),
  entities: [path.resolve(__dirname, 'src/**/*.entity{.ts,.js}')],
  migrations: [path.resolve(__dirname, 'src/database/migrations/**/*.ts')],
  seeds: ['src/database/seeds/**/*{.ts,.js}'],
  factories: ['src/database/factories/**/*{.ts,.js}'],
  logger: 'advanced-console',
  logging: ['warn', 'error'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

if (process.env.NODE_ENV !== 'test') {
  module.exports = {
    host: env('DATABASE_HOST'),
    port: env('DATABASE_PORT'),
    username: env('DATABASE_USERNAME'),
    password: env('DATABASE_PASSWORD'),
    synchronize: false,
    ...baseConfig,
  };
} else {
  module.exports = {
    dropSchema: true,
    synchronize: true,
    ...baseConfig,
  };
}
