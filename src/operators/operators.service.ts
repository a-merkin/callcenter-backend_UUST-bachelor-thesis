import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Operator } from './operator.entity';
import { CreateOperatorDto } from './dto/create-operator.dto';
import { UpdateOperatorDto } from './dto/update-operator.dto';

@Injectable()
export class OperatorsService {
  constructor(
    @InjectRepository(Operator)
    private operatorsRepository: Repository<Operator>,
  ) {}

  create(createOperatorDto: CreateOperatorDto): Promise<Operator> {
    const operator = this.operatorsRepository.create(createOperatorDto);
    return this.operatorsRepository.save(operator);
  }

  findAll(): Promise<Operator[]> {
    return this.operatorsRepository.find();
  }

  findOne(id: number): Promise<Operator> {
    return this.operatorsRepository.findOne({ where: { id } });
  }

  async update(id: number, updateOperatorDto: UpdateOperatorDto): Promise<Operator> {
    await this.operatorsRepository.update(id, updateOperatorDto);
    return this.operatorsRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.operatorsRepository.delete(id);
  }
}
