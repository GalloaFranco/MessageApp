import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { MessageDto } from '../../responses/message-dto.interface';

@Controller('messages')
export class MessagesController {

  @Post()
  createMessage(@Body() messageDto: MessageDto) {
    return 'mensaje creado';
  }

  @Get()
  getAll() {
    return 'lista de mensajes';
  }

  @Put(':id')
  updateMessage(@Body() messageDto: MessageDto) {
    return 'mensaje actualizado';
  }

  @Delete(':id')
  deleteMessage() {
    'mensaje eliminado';
  }
}
