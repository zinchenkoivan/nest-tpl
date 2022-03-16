import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import Configuration from './config/app.config';

const config = Configuration();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(config.prefix, {
    exclude: ['healthz'],
  });

  // const swaggerConfig = new DocumentBuilder()
  //   .setTitle('Cats example')
  //   .setDescription('The cats API description')
  //   .setVersion('1.0')
  //   .addTag('cats')
  //   .build();
  // const document = SwaggerModule.createDocument(app, swaggerConfig);
  // SwaggerModule.setup('api', app, document);

  await app.listen(config.port);
}
bootstrap();
