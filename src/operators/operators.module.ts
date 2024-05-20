import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperatorsService } from './operators.service';
import { OperatorsController } from './operators.controller';
import { Operator } from './operator.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Operator])],
  providers: [OperatorsService],
  controllers: [OperatorsController],
})
export class OperatorsModule {}
