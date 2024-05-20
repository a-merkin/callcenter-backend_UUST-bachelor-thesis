import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Incident } from '../incidents/incident.entity';

@Entity('operator')
export class Operator {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  IncidentsID: number;

  @Column()
  Name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  isactive: boolean;

  @OneToMany(() => Incident, incident => incident.operator)
  incidents: Incident[];
}
