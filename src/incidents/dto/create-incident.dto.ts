import { ApiProperty } from '@nestjs/swagger';

export class CreateIncidentDto {
  @ApiProperty({ example: 1, description: 'User ID' })
  UserID: number;

  @ApiProperty({ example: 'John Doe', description: 'Full name of the user' })
  FIO: string;

  @ApiProperty({ example: 'MTH-101', description: 'Group of the user', nullable: true })
  group?: string;

  @ApiProperty({ example: 'Mathematics', description: 'Faculty of the user', nullable: true })
  faculty?: string;

  @ApiProperty({ example: 'School #15', description: 'School of the user', nullable: true })
  school?: string;

  @ApiProperty({ example: 'Request for exam retake', description: 'Reason for the incident' })
  reason: string;

  @ApiProperty({ example: '15:38', description: 'Time of the incident' })
  time: string;

  @ApiProperty({ example: '2023-05-15', description: 'Date of the incident' })
  date: string;

  @ApiProperty({ example: 'bot', description: 'Source of the incident' })
  source: string;

  @ApiProperty({ example: '1234567890', description: 'Phone number of the user', nullable: true })
  phone?: number;

  @ApiProperty({ example: 'new', description: 'Status of the incident' })
  status: string;
}
