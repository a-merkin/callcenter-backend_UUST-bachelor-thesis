import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  @ApiProperty({ example: 1, description: 'Chat ID' })
  ChatID: number;

  @ApiProperty({ example: 'This is a message', description: 'Content of the message' })
  content: string;
}
