import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as cluster from 'cluster';
import * as os from 'os';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Messages')
    .setDescription('Simple CRUD for messages')
    .setVersion('1.0.0')
    .addTag('Messages')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('/message/docs', app, document);

  await app.listen(3000);
}

const cpus = os.cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
} else {
  bootstrap().then(() => console.log('Server running 🚀!'));
}
