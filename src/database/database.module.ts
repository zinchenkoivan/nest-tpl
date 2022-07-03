import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          ...configService.get('database'),
          entities: ['dist/**/*.entity{.ts,.js}'],
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
