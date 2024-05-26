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

  async createIncidentFromCall(phone: string, token: string, tfop: string, menu_item: number) {
    const reason = this.getReasonByMenuItem(menu_item);
    const newIncident = this.incidentsRepository.create({
      phone,
      token,
      tfop,
      reason,
      status: 'new',
      source: 'call',
    });

    return await this.incidentsRepository.save(newIncident);
  }

  getReasonByMenuItem(menu_item: number): string {
    switch (menu_item) {
      case 1:
        return 'Учебный отдел';
      case 2:
        return 'Приемная комиссия';
      case 3:
        return 'Канцелярия';
      case 4:
        return 'Бухгалтерия';
      case 5:
        return 'Отдел кадров';
      case 6:
        return 'Библиотека';
      case 7:
        return 'IT-отдел';
      case 8:
        return 'Студенческий совет';
      case 9:
        return 'Научный отдел';
      case 10:
        return 'Отдел международных связей';
      case 11:
        return 'Отдел безопасности';
      default:
        return 'Неизвестная категория';
    }
  }
}
