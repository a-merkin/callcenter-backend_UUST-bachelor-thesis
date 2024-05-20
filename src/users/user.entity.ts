import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Incident } from '../incidents/incident.entity';
import { Chat } from '../chat/chat.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  UserID: number;

  @Column()
  FIO: string;

  @Column()
  phone: number;

  @Column({ nullable: true })
  school: string;

  @Column({ nullable: true })
  group: string;

  @Column({ nullable: true })
  faculty: string;

  @Column({ nullable: true })
  incidentsList: boolean;

  @OneToMany(() => Incident, incident => incident.user)
  incidents: Incident[];

  @OneToMany(() => Chat, chat => chat.user)
  chats: Chat[];
}
