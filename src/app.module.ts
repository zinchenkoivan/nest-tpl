import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HealthzModule } from './healthz/healthz.module';
import { UsersModule } from './users/users.module';

import appConfig from './config/app.config';

export const ALL_ENTITIES = [];

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        return {
          ...config.get('app.db'),
          entities: ALL_ENTITIES,
        };
      },
    }),
    HealthzModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
