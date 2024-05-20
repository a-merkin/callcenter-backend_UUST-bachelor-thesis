import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat } from './chat.entity';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private chatsRepository: Repository<Chat>,
  ) {}

  create(createChatDto: CreateChatDto): Promise<Chat> {
    const chat = this.chatsRepository.create(createChatDto);
    return this.chatsRepository.save(chat);
  }

  findAll(): Promise<Chat[]> {
    return this.chatsRepository.find();
  }

  findOne(id: number): Promise<Chat> {
    return this.chatsRepository.findOne({ where: { id } });
  }

  async update(id: number, updateChatDto: UpdateChatDto): Promise<Chat> {
    await this.chatsRepository.update(id, updateChatDto);
    return this.chatsRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.chatsRepository.delete(id);
  }
}
