import { Field, ObjectType } from '@nestjs/graphql';
import { Cookies } from 'src/cookies/cookies.entity';
import { Users } from 'src/users/users.entity';
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity('favorites')
export class Favorites {
  @Field()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field(() => Users)
  @ManyToOne(() => Users, (user) => user.favoritedCookie, {
    onDelete: 'CASCADE',
  })
  user: Users;

  @Field(() => Cookies)
  @ManyToOne(() => Cookies, (cookie) => cookie.usersFavorited, {
    onDelete: 'CASCADE',
  })
  cookie: Cookies;

  @Field(() => Date, { nullable: true })
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
