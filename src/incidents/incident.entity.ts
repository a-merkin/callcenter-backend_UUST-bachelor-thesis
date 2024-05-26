// entities/incident.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Incident {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  fio: string;

  @Column({ nullable: true })
  group: string;

  @Column({ nullable: true })
  faculty: string;

  @Column({ nullable: true })
  school: string;

  @Column()
  reason: string;

  @Column()
  time: string;

  @Column()
  date: string;

  @Column()
  source: string;

  @Column()
  phone: string;

  @Column()
  status: string;

  @Column({ nullable: true })
  token: string;

  @Column({ nullable: true })
  tfop: string;
}
