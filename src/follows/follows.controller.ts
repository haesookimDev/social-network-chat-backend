// src/follows/follows.controller.ts
import { Controller, Post, Get, Body } from '@nestjs/common';
import { FollowsService } from './follows.service';

@Controller('follows')
export class FollowsController {
  constructor(private readonly followsService: FollowsService) {}

  @Post()
  followUser(@Body() followDto) {
    return this.followsService.followUser(followDto);
  }

  @Get()
  findAll() {
    return this.followsService.findAll();
  }
}
