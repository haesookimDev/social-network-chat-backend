// src/feeds/feed.model.ts
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../users/user.model';
import { Post } from '../posts/post.model';

@Table({ tableName: 'feeds' })
export class Feed extends Model<Feed> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  activityType: string; // 'POST', 'COMMENT', 'LIKE', etc.

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @ForeignKey(() => Post)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  postId: number; // 해당 게시물 ID (댓글과 좋아요의 경우)

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Post)
  post: Post;
}
