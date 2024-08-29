// src/likes/likes.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Like } from './like.model';

@Injectable()
export class LikesService {
  constructor(@InjectModel(Like) private likeModel: typeof Like) {}

  async likePost(likeDto): Promise<Like> {
    return this.likeModel.create(likeDto);
  }

  async findAll(): Promise<Like[]> {
    return this.likeModel.findAll();
  }

  // 추가적인 기능 구현 가능
}
