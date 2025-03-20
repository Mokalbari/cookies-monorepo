import { Field, InputType, PickType } from '@nestjs/graphql';
import {
  IsArray,
  IsEnum,
  IsNumber,
  IsOptional,
  IsUUID,
  Max,
  Min,
} from 'class-validator';
import { OrderItemCreateInput } from '../order-items/order-items.dto';
import { OrderStatus } from './orders.entity';

@InputType({ isAbstract: true })
export abstract class OrderDTO {
  @Field(() => OrderStatus)
  @IsEnum(OrderStatus)
  orderStatus: OrderStatus = OrderStatus.PENDING;

  @Field(() => Number)
  @IsNumber()
  @Min(0)
  @Max(10_000)
  total: number;

  @Field(() => String)
  @IsUUID()
  userId: string;

  @Field(() => [OrderItemCreateInput])
  @IsArray()
  items: OrderItemCreateInput[] = [];
}

@InputType()
export class OrderCreateInput extends OrderDTO {}

@InputType()
export class OrderUpdateInput extends PickType(OrderCreateInput, [
  'orderStatus',
  'total',
]) {
  @Field(() => [OrderItemCreateInput])
  @IsOptional()
  @IsArray()
  items?: OrderItemCreateInput[];
}
