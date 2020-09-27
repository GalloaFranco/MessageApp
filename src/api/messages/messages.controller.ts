import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { MessageDto } from '../../responses/message-dto.interface';
import { MessageService } from '../../services/message/message.service';

@Controller('message')
export class MessagesController {


  constructor(private readonly messageService: MessageService) {
  }

  @Post()
  createMessage(@Body() messageDto: MessageDto, @Res() response) {
    return this.messageService.create(messageDto).then( (res) => {
      response.status(HttpStatus.CREATED).json(res);
      console.log(`create message with id: ${res.id} success`); // In future will use Logger
    }).catch( () => {
      response.status(HttpStatus.FORBIDDEN).json({ message: 'Error al crear mensaje' })
    });
  }

  @Get()
  getAll(@Res() response) {
    return this.messageService.getAll().then((res) => {
      response.status(HttpStatus.OK).json(res);
      console.log('GET Messages') // In future will use Logger
    }).catch( () => {
      response.status(HttpStatus.FORBIDDEN).json({ message: 'Error al obtener la lista de mensajes' })
    });
  }

  @Put(':id')
  updateMessage(@Body() messageDto: MessageDto, @Res() response, @Param('id') idMessage: number) {
    return this.messageService.update(messageDto, idMessage).then((res) => {
      response.status(HttpStatus.OK).json(res);
      console.log(`update message with id: ${res.id} success`); // In future will use Logger
    }).catch(
      response.status(HttpStatus.FORBIDDEN).json({message:'Error al actualizar mensaje'})
    );
  }

  @Delete(':id')
  deleteMessage(@Param('id') idMessage: number, @Res() response) {
    return this.messageService.delete(idMessage).then((res) => {
      response.status(HttpStatus.OK).json(res);
      console.log(`delete message with id: ${idMessage} success`); // In future will use Logger
    }).catch( () => {
      response.status(HttpStatus.FORBIDDEN).json({ message: 'Error al actualizar mensaje' })
    })
  }
}
