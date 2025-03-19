import { Args, Query, Resolver } from '@nestjs/graphql';
import { GetFavoritesArgs } from './favorites.args';
import { Favorites } from './favorites.entity';
import { FavoritesService } from './favorites.service';
import { PaginatedFavorites } from './favorites.types';

@Resolver(() => Favorites)
export class FavoritesResolver {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Query(() => PaginatedFavorites)
  async usersFavoriteAndCount(@Args() args: GetFavoritesArgs) {
    const { data, total } =
      await this.favoritesService.getUsersFavoritedAndCount(
        args.userId,
        args.skip,
        args.take,
      );

    return { data, total };
  }
}
