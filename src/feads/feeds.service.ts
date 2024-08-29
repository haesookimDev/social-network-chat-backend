// src/feeds/feeds.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Feed } from './feed.model';

@Injectable()
export class FeedsService {
  constructor(@InjectModel(Feed) private feedModel: typeof Feed) {}

  async createFeed(activityType: string, userId: number, postId?: number): Promise<Feed> {
    return this.feedModel.create({ activityType, userId, postId });
  }

  async getUserFeed(userId: number): Promise<Feed[]> {
    return this.feedModel.findAll({ where: { userId }, order: [['createdAt', 'DESC']] });
  }
}
