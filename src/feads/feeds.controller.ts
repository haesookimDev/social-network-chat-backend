// src/feeds/feeds.controller.ts
import { Controller, Get, Post, Body, Request } from '@nestjs/common';
import { FeedsService } from './feeds.service';

@Controller('feeds')
export class FeedsController {
  constructor(private readonly feedsService: FeedsService) {}

  @Post()
  create(@Body() createFeedDto, @Request() req) {
    return this.feedsService.createFeed(createFeedDto.activityType, req.user.id, createFeedDto.postId);
  }

  @Get()
  getUserFeed(@Request() req) {
    return this.feedsService.getUserFeed(req.user.id);
  }
}
