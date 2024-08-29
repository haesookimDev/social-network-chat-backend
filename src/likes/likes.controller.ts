// src/likes/likes.controller.ts
import { Controller, Post, Get, Body } from '@nestjs/common';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post()
  likePost(@Body() likeDto) {
    return this.likesService.likePost(likeDto);
  }

  @Get()
  findAll() {
    return this.likesService.findAll();
  }
}
