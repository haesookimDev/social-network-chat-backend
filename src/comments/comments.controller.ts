// src/comments/comments.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(@Body() createCommentDto) {
    return this.commentsService.createComment(createCommentDto);
  }

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }
}
