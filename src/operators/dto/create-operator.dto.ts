import { ApiProperty } from '@nestjs/swagger';

export class CreateOperatorDto {
  @ApiProperty({ example: 1, description: 'Incident ID' })
  IncidentsID: number;

  @ApiProperty({ example: 'Operator Name', description: 'Name of the operator' })
  Name: string;

  @ApiProperty({ example: 'operator@example.com', description: 'Email of the operator' })
  email: string;

  @ApiProperty({ example: 'password123', description: 'Password of the operator' })
  password: string;

  @ApiProperty({ example: true, description: 'Is operator active', default: true })
  isactive?: boolean;
}
