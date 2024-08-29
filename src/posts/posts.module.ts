// src/posts/posts.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';

@Module({
  imports: [SequelizeModule.forFeature([Post])],
  providers: [PostsService],
  controllers: [PostsController],
  exports: [PostsService],
})
export class PostsModule {}
