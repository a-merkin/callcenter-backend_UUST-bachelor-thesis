import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Chat } from './chat.entity';

@ApiTags('chat')
@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  @ApiOperation({ summary: 'Create chat' })
  @ApiResponse({ status: 201, description: 'Chat created successfully.', type: Chat })
  create(@Body() createChatDto: CreateChatDto) {
    return this.chatService.create(createChatDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all chats' })
  @ApiResponse({ status: 200, description: 'List of chats.', type: [Chat] })
  findAll() {
    return this.chatService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get chat by ID' })
  @ApiResponse({ status: 200, description: 'Chat found.', type: Chat })
  findOne(@Param('id') id: string) {
    return this.chatService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update chat by ID' })
  @ApiResponse({ status: 200, description: 'Chat updated successfully.', type: Chat })
  update(@Param('id') id: string, @Body() updateChatDto: UpdateChatDto) {
    return this.chatService.update(+id, updateChatDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete chat by ID' })
  @ApiResponse({ status: 200, description: 'Chat deleted successfully.' })
  remove(@Param('id') id: string) {
    return this.chatService.remove(+id);
  }
}
