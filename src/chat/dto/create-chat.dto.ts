import { ApiProperty } from '@nestjs/swagger';

export class CreateChatDto {
  @ApiProperty({ example: 1, description: 'Chat ID' })
  ChatID: number;

  @ApiProperty({ example: 1, description: 'User ID' })
  UserID: number;
}
