import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetFavoritesArgs {
  @Field()
  userId: string;

  @Field({ nullable: true, defaultValue: 0 })
  skip: number;

  @Field({ nullable: true, defaultValue: 0 })
  take: number;
}
