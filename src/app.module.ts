import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { ConfigurationModule } from './config/config.module';

@Module({
  imports: [ConfigurationModule, UsersModule, DatabaseModule],
})
export class AppModule {}
