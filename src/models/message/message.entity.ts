import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm/index';

@Entity('Message')
export class MessageEntity {

  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  private nick: string;

  @Column()
  private message: string;
}
