// src/follows/follow.model.ts
import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../users/user.model';

@Table({ tableName: 'follows' })
export class Follow extends Model<Follow> {
  @ForeignKey(() => User)
  @Column({
    type: 'INTEGER',
    allowNull: false,
  })
  followerId: number;

  @ForeignKey(() => User)
  @Column({
    type: 'INTEGER',
    allowNull: false,
  })
  followingId: number;

  @BelongsTo(() => User, 'followerId')
  follower: User;

  @BelongsTo(() => User, 'followingId')
  following: User;
}
