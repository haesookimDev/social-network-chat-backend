// src/likes/likes.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Like } from './like.model';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';

@Module({
  imports: [SequelizeModule.forFeature([Like])],
  providers: [LikesService],
  controllers: [LikesController],
  exports: [LikesService],
})
export class LikesModule {}
