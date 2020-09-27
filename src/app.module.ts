import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesController } from './api/messages/messages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageService } from './services/message/message.service';
import { MessageEntity } from './models/message/message.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([MessageEntity])
  ],
  controllers: [AppController, MessagesController],
  providers: [AppService, MessageService],
})
export class AppModule {}
