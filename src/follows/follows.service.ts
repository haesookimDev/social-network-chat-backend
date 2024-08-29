// src/follows/follows.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Follow } from './follow.model';

@Injectable()
export class FollowsService {
  constructor(@InjectModel(Follow) private followModel: typeof Follow) {}

  async followUser(followDto): Promise<Follow> {
    return this.followModel.create(followDto);
  }

  async findAll(): Promise<Follow[]> {
    return this.followModel.findAll();
  }

  // 추가적인 기능 구현 가능
}
