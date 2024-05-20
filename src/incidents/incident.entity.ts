import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';
import { Operator } from '../operators/operator.entity';
import { Chat } from '../chat/chat.entity';

@Entity('incident')
export class Incident {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  UserID: number;

  @Column()
  IncidentsID: number;

  @Column({ nullable: true })
  FIO: string;

  @Column({ nullable: true })
  group: string;

  @Column({ nullable: true })
  faculty: string;

  @Column({ nullable: true })
  school: string;

  @Column()
  reason: string;

  @Column({ type: 'time' })
  time: string;

  @Column({ type: 'date' })
  date: string;

  @Column()
  source: string;

  @Column({ nullable: true })
  phone: number;

  @Column({ nullable: true })
  status: string;

  @ManyToOne(() => User, user => user.incidents)
  user: User;

  @ManyToOne(() => Operator, operator => operator.incidents)
  operator: Operator;

  @ManyToOne(() => Chat, chat => chat.incidents)
  chat: Chat;
}
