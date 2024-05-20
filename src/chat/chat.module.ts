import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatGateway } from './chat.gateway';
import { Chat } from './chat.entity';
import { Message } from './message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Chat, Message])],
  providers: [ChatGateway],
})
export class ChatModule {}
