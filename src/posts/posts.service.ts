import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<Post> {
    const post = await this.postModel.findByPk(id);
    if (!post) {
      throw new NotFoundException('게시물을 찾을 수 없습니다.');
    }
    return post;
  }

  async remove(id: string): Promise<void> {
    const post = await this.findOne(id);
    await post.destroy();
  }

  // 추가적인 CRUD 메서드 구현 가능
}
