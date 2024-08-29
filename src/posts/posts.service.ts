import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './post.model';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private postModel: typeof Post) {}

  async createPost(createPostDto): Promise<Post> {
    return this.postModel.create(createPostDto);
  }

  async findAll(): Promise<Post[]> {
    return this.postModel.findAll();
  }

  // 추가적인 CRUD 메서드 구현 가능
}
