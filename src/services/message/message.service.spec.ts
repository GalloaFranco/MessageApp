import { Test, TestingModule } from '@nestjs/testing';
import { MessageService } from './message.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MessageEntity } from '../../models/message/message.entity';

describe('MessageService', () => {
  let service: MessageService;
  const messageRepository = {};


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageService,
        {provide: getRepositoryToken(MessageEntity), useValue: messageRepository}],
    }).compile();

    service = module.get<MessageService>(MessageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
