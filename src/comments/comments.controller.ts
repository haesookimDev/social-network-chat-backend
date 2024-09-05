// src/comments/comments.controller.ts
import { Controller, Get, Post, Query, Body, Request } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { ApiTags, ApiOperation, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';
import { Comment } from './comment.model';

@Controller('comments')
@ApiTags('Comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  @ApiOperation({ summary: '댓글 생성 API', description: '댓글 생성' })
  @ApiCreatedResponse({ description: '댓글을 생성한다.', type: Comment })
  create(@Body() createCommentDto, @Request() req) {
    return this.commentsService.createComment({ ...createCommentDto, userId: req.user.id });
  }

  @Get()
  @ApiOperation({ summary: '댓글 가져오기 API', description: '댓글 가져오기' })
  @ApiResponse({ description: '댓글을 가져온다.', type: Comment })
  findAll(@Query() query) {
    return this.commentsService.findAll(query);
  }
}
