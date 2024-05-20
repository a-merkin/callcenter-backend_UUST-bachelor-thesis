import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Message } from './message.entity';

@ApiTags('messages')
@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  @ApiOperation({ summary: 'Create message' })
  @ApiResponse({ status: 201, description: 'Message created successfully.', type: Message })
  create(@Body() createMessageDto: CreateMessageDto) {
    return this.messagesService.create(createMessageDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all messages' })
  @ApiResponse({ status: 200, description: 'List of messages.', type: [Message] })
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get message by ID' })
  @ApiResponse({ status: 200, description: 'Message found.', type: Message })
  findOne(@Param('id') id: string) {
    return this.messagesService.findOne(+id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete message by ID' })
  @ApiResponse({ status: 200, description: 'Message deleted successfully.' })
  remove(@Param('id') id: string) {
    return this.messagesService.remove(+id);
  }
}
