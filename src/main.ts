import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  return app;
}

export async function handler(event, context) {
  const app = await bootstrap();
  const service = app.get('AppService');
  console.log(event, context);
  return service.getHello();
}
