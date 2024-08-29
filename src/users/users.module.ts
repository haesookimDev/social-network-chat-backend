// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';  // 사용자 모델
import { UsersService } from './users.service'; // 사용자 서비스
import { UsersController } from './users.controller'; // 사용자 컨트롤러 (선택적)

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersController], // 사용자 관련 라우트를 관리할 컨트롤러 (선택적)
  exports: [UsersService], // 다른 모듈에서 서비스 사용 가능하도록 내보내기
})
export class UsersModule {}
