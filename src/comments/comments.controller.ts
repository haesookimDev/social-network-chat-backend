// src/comments/comments.controller.ts
import { Controller, Get, Post, Query, Body, Request } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(@Body() createCommentDto, @Request() req) {
    return this.commentsService.createComment({ ...createCommentDto, userId: req.user.id });
  }

  @Get()
  findAll(@Query() query) {
    return this.commentsService.findAll(query);
  }
}
