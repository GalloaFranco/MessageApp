import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm/index';

@Entity('Message')
export class MessageEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nick: string;

  @Column()
  message: string;
}
