import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { OperatorsService } from './operators.service';
import { CreateOperatorDto } from './dto/create-operator.dto';
import { UpdateOperatorDto } from './dto/update-operator.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Operator } from './operator.entity';

@ApiTags('operators')
@Controller('operators')
export class OperatorsController {
  constructor(private readonly operatorsService: OperatorsService) {}

  @Post()
  @ApiOperation({ summary: 'Create operator' })
  @ApiResponse({ status: 201, description: 'Operator created successfully.', type: Operator })
  create(@Body() createOperatorDto: CreateOperatorDto) {
    return this.operatorsService.create(createOperatorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all operators' })
  @ApiResponse({ status: 200, description: 'List of operators.', type: [Operator] })
  findAll() {
    return this.operatorsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get operator by ID' })
  @ApiResponse({ status: 200, description: 'Operator found.', type: Operator })
  findOne(@Param('id') id: string) {
    return this.operatorsService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update operator by ID' })
  @ApiResponse({ status: 200, description: 'Operator updated successfully.', type: Operator })
  update(@Param('id') id: string, @Body() updateOperatorDto: UpdateOperatorDto) {
    return this.operatorsService.update(+id, updateOperatorDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete operator by ID' })
  @ApiResponse({ status: 200, description: 'Operator deleted successfully.' })
  remove(@Param('id') id: string) {
    return this.operatorsService.remove(+id);
  }
}
