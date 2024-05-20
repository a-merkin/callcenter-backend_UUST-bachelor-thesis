import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Incident } from './incident.entity';
import { CreateIncidentDto } from './dto/create-incident.dto';
import { UpdateIncidentDto } from './dto/update-incident.dto';

@Injectable()
export class IncidentsService {
  constructor(
    @InjectRepository(Incident)
    private incidentsRepository: Repository<Incident>,
  ) {}

  create(createIncidentDto: CreateIncidentDto): Promise<Incident> {
    const incident = this.incidentsRepository.create(createIncidentDto);
    return this.incidentsRepository.save(incident);
  }

  findAll(): Promise<Incident[]> {
    return this.incidentsRepository.find();
  }

  findOne(id: number): Promise<Incident> {
    return this.incidentsRepository.findOne({ where: { id } });
  }

  async update(id: number, updateIncidentDto: UpdateIncidentDto): Promise<Incident> {
    await this.incidentsRepository.update(id, updateIncidentDto);
    return this.incidentsRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.incidentsRepository.delete(id);
  }
}
