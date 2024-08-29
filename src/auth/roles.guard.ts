// src/auth/roles.guard.ts
import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PostsService } from '../posts/posts.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private postsService: PostsService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const { id } = request.params; // 예: 게시물 ID

    const post = await this.postsService.findOne(id);

    if (post.userId !== user.id) {
      throw new ForbiddenException('접근 권한이 없습니다.');
    }

    return true;
  }
}
