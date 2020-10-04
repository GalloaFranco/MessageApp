import { Module } from '@nestjs/common';
import { MessagesController } from './api/messages/messages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageService } from './services/message/message.service';
import { MessageEntity } from './models/message/message.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([MessageEntity])
  ],
  controllers: [MessagesController],
  providers: [MessageService],
})
export class AppModule {}
