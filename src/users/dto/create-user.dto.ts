import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 1, description: 'User ID' })
  UserID: number;

  @ApiProperty({ example: 'John Doe', description: 'Full name of the user' })
  FIO: string;

  @ApiProperty({ example: '1234567890', description: 'Phone number of the user' })
  phone: number;

  @ApiProperty({ example: 'School #15', description: 'School of the user', nullable: true })
  school?: string;

  @ApiProperty({ example: 'MTH-101', description: 'Group of the user', nullable: true })
  group?: string;

  @ApiProperty({ example: 'Mathematics', description: 'Faculty of the user', nullable: true })
  faculty?: string;

  @ApiProperty({ example: true, description: 'Incidents list status', nullable: true })
  incidentsList?: boolean;
}
