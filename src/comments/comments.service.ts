// src/comments/comments.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comment } from './comment.model';

@Injectable()
export class CommentsService {
  constructor(@InjectModel(Comment) private commentModel: typeof Comment) {}

  async createComment(createCommentDto): Promise<Comment> {
    return this.commentModel.create(createCommentDto);
  }

  async findAll(): Promise<Comment[]> {
    return this.commentModel.findAll();
  }

  // 추가적인 CRUD 메서드 구현 가능
}
