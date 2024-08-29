// src/feeds/feeds.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Feed } from "./feed.model";
import { FeedsService } from "./feeds.service";
import { FeedsController } from "./feeds.controller";

@Module({
    imports: [SequelizeModule.forFeature([Feed])],
    providers: [FeedsService],
    controllers: [FeedsController],
    exports: [FeedsService],
})
export class FeedsModule {}