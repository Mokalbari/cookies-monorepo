import { Field, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core-entity';
import { Cookies } from 'src/modules/cookies/cookies.entity';
import { Users } from 'src/modules/users/users.entity';
import { Entity, ManyToOne } from 'typeorm';

@ObjectType()
@Entity('favorites')
export class Favorites extends CoreEntity {
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
}
