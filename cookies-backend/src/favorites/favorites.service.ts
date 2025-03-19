import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favorites } from './favorites.entity';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(Favorites)
    private readonly favoritesRepository: Repository<Favorites>,
  ) {}

  async getUsersFavoritedAndCount(
    userId: string,
    skip: number,
    take: number,
  ): Promise<{ data: Favorites[]; total: number }> {
    const [data, total] = await this.favoritesRepository.findAndCount({
      where: {
        user: { id: userId },
      },
      skip,
      take,
    });

    return {
      data,
      total,
    };
  }
}
