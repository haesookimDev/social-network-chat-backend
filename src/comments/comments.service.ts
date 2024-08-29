// src/comments/comments.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comment } from './comment.model';

@Injectable()
export class CommentsService {
  constructor(@InjectModel(Comment) private commentModel: typeof Comment) {}

  async createComment(createCommentDto): Promise<Comment> {
    return this.commentModel.create(createCommentDto);
  }

  async findAll(filters = {}): Promise<Comment[]> {
    return this.commentModel.findAll({ where: filters, order: [['createdAt', 'DESC']] });
  }

  async findOne(id: string): Promise<Comment> {
    const comment = await this.commentModel.findByPk(id);
    if (!comment) {
      throw new NotFoundException('댓글을 찾을 수 없습니다.');
    }
    return comment;
  }

  async remove(id: string): Promise<void> {
    const comment = await this.findOne(id);
    await comment.destroy();
  }
  // 추가적인 CRUD 메서드 구현 가능
}
