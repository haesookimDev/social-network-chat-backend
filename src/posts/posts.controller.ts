import { Controller, Get, Post, Request, Body, UseGuards, Param, Delete  } from '@nestjs/common';
import { PostsService } from './posts.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @UseGuards(JwtAuthGuard) // 인증된 사용자만 접근 가능
  @Post()
  create(@Body() createPostDto, @Request() req) {
    return this.postsService.createPost({ ...createPostDto, userId: req.user.id });
  }

  @UseGuards(JwtAuthGuard, RolesGuard) // 인증 및 권한 가드 적용
  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    return this.postsService.remove(id);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }
}
