import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../users/user.entity';
import { Message } from './message.entity';
import { Incident } from '../incidents/incident.entity';

@Entity('chat')
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ChatID: number;

  @Column()
  UserID: number;

  @ManyToOne(() => User, user => user.chats)
  user: User;

  @OneToMany(() => Message, message => message.chat)
  messages: Message[];

  @OneToMany(() => Incident, incident => incident.chat)
  incidents: Incident[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date;
}
