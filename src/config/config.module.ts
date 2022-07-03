import { Module } from '@nestjs/common';
import configuration from './configuration';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [configuration],
    }),
  ],
})
export class ConfigurationModule {}
