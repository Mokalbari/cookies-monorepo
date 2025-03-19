import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Favorites } from './favorites.entity';

@ObjectType()
export class PaginatedFavorites {
  @Field(() => [Favorites])
  data: Favorites[];

  @Field(() => Int)
  total: number;
}
