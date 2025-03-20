import { Field, InputType, PickType } from '@nestjs/graphql';
import { IsNumber, IsUUID, Max, Min } from 'class-validator';

@InputType({ isAbstract: true })
export abstract class OrderItemDTO {
  @Field(() => String)
  @IsUUID()
  cookieId: string;

  @Field(() => Number)
  @IsNumber()
  @Min(1)
  @Max(100)
  quantity: number;
}

@InputType()
export class OrderItemCreateInput extends OrderItemDTO {}

@InputType()
export class OrderItemUpdateInput extends PickType(OrderItemCreateInput, [
  'quantity',
]) {}
