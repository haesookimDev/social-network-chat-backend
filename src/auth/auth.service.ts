// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../users/user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    private jwtService: JwtService,
  ) {}

  async register(username: string, password: string, email: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userModel.create({ username, password: hashedPassword, email });
    return user;
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ where: { username } });
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async profile() {
    const payload = {  };
    return {
      // access_token: this.jwtService.verify(),
    };
  }
}
