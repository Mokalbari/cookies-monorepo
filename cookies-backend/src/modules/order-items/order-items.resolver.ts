import { Resolver } from '@nestjs/graphql';
import { createBaseResolver } from 'src/common/abstract/abstract.resolver';
import { OrderItemCreateInput, OrderItemUpdateInput } from './order-items.dto';
import { OrderItems } from './order-items.entity';
import { OrderItemsService } from './order-items.service';

@Resolver()
export class OrderItemsResolver extends createBaseResolver(
  OrderItems,
  OrderItemCreateInput,
  OrderItemUpdateInput,
) {
  constructor(private readonly orderItemsService: OrderItemsService) {
    super(orderItemsService);
  }
}
