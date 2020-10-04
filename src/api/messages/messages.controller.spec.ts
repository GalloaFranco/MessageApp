import { Test, TestingModule } from '@nestjs/testing';
import { MessagesController } from './messages.controller';
import { MessageService } from '../../services/message/message.service';
import { MessageEntity } from '../../models/message/message.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { response } from 'express';

describe('MessagesController', () => {
  let message: MessageEntity;
  let messagesController: MessagesController;
  let messageService: MessageService;
  let messageRepository = {
    create: jest.fn().mockResolvedValue(message),
    save: jest.fn().mockReturnValue(Promise.resolve())
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessagesController],
      providers: [MessageService,
        {provide: getRepositoryToken(MessageEntity), useValue: messageRepository}]
    }).compile();

    messagesController = await module.get<MessagesController>(MessagesController);
    messageService =  await module.get<MessageService>(MessageService);
    messageRepository = await module.get(getRepositoryToken(MessageEntity));
  });

  it('should message controller and service be defined', () => {
    expect(messagesController).toBeDefined();
    expect(messageService).toBeDefined();
  });

  it('should getAll method return all messages', () => {
    const result = new Promise<MessageEntity[]>(resolve => {
      resolve(Array.of(new MessageEntity()));
    });
    jest.spyOn(messageService, 'getAll').mockImplementation(() => result);

    expect(messagesController.getAll(response)).toEqual(result);
  });
});
