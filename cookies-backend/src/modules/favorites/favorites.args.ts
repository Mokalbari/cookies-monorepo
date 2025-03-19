import { ArgsType, Field } from '@nestjs/graphql';
import { PaginatedEntity } from 'src/common/entities/paginated.entity';

@ArgsType()
export class GetFavoritesArgs extends PaginatedEntity {
  @Field()
  userId: string;
}
