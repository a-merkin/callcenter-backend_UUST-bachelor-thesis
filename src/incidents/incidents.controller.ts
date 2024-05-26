import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { IncidentsService } from './incidents.service';
import { CreateIncidentDto } from './dto/create-incident.dto';
import { UpdateIncidentDto } from './dto/update-incident.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Incident } from './incident.entity';

@ApiTags('incidents')
@Controller('incidents')
export class IncidentsController {
  constructor(private readonly incidentsService: IncidentsService) {}

  @Post()
  @ApiOperation({ summary: 'Create incident' })
  @ApiResponse({ status: 201, description: 'Incident created successfully.', type: Incident })
  create(@Body() createIncidentDto: CreateIncidentDto) {
    return this.incidentsService.create(createIncidentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all incidents' })
  @ApiResponse({ status: 200, description: 'List of incidents.', type: [Incident] })
  findAll() {
    return this.incidentsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get incident by ID' })
  @ApiResponse({ status: 200, description: 'Incident found.', type: Incident })
  findOne(@Param('id') id: string) {
    return this.incidentsService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update incident by ID' })
  @ApiResponse({ status: 200, description: 'Incident updated successfully.', type: Incident })
  update(@Param('id') id: string, @Body() updateIncidentDto: UpdateIncidentDto) {
    return this.incidentsService.update(+id, updateIncidentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete incident by ID' })
  @ApiResponse({ status: 200, description: 'Incident deleted successfully.' })
  remove(@Param('id') id: string) {
    return this.incidentsService.remove(+id);
  }
}

@Controller('freeswitch')
export class IncidentController {
  constructor(private readonly incidentService: IncidentsService) {}

  @Post('active_incident_by_phone')
  async createIncident(@Body() body: any) {
    const { phone, token, tfop, menu_item } = body;
    return this.incidentService.createIncidentFromCall(phone, token, tfop, menu_item);
  }
}
