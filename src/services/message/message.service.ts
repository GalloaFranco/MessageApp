import { Injectable } from '@nestjs/common';
import { Repository,DeleteResult } from 'typeorm';
import { MessageEntity } from '../../models/message/message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from '../../responses/message-dto.interface';

@Injectable()
export class MessageService {

  constructor(
    @InjectRepository(MessageEntity)
    private readonly messageRepository: Repository<MessageEntity>
  ) {}

  async getAll(): Promise<MessageEntity[]> {
    return await this.messageRepository.find();
  }

  async create(message: MessageDto): Promise<MessageEntity> {
    const messageToCreate = new MessageEntity();
    messageToCreate.message = message.message;
    messageToCreate.nick = message.nick;

    return await this.messageRepository.save(messageToCreate);
  }

  async update(message: MessageDto, messageId: number): Promise<MessageEntity> {
    const messageToUpdate = await this.messageRepository.findOne(messageId);
    messageToUpdate.message = message.message;
    messageToUpdate.nick = message.nick;

    return await this.messageRepository.save(messageToUpdate);
  }

  async delete(messageId: number): Promise<DeleteResult> {
   return await this.messageRepository.delete(messageId);
  }
}
