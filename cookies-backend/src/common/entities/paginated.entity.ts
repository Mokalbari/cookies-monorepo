import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PaginatedEntity {
  @Field({ nullable: true, defaultValue: 0 })
  skip: number;

  @Field({ nullable: true, defaultValue: 0 })
  take: number;
}
