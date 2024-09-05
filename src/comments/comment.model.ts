import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Post } from '../posts/post.model';
import { User } from '../users/user.model';
import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: 'comments' })
export class Comment extends Model<Comment> {
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  @ApiProperty({description: 'content'})
  content: string;

  @ForeignKey(() => Post)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  @ApiProperty({description: 'postId'})
  postId: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  @ApiProperty({description: 'userId'})
  userId: number;

  @BelongsTo(() => Post)
  post: Post;

  @BelongsTo(() => User)
  user: User;
}
