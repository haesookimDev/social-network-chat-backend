// src/likes/like.model.ts
import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Post } from '../posts/post.model';
import { User } from '../users/user.model';

@Table({ tableName: 'likes' })
export class Like extends Model<Like> {
  @ForeignKey(() => Post)
  @Column({
    type: 'INTEGER',
    allowNull: false,
  })
  postId: number;

  @ForeignKey(() => User)
  @Column({
    type: 'INTEGER',
    allowNull: false,
  })
  userId: number;

  @BelongsTo(() => Post)
  post: Post;

  @BelongsTo(() => User)
  user: User;
}
