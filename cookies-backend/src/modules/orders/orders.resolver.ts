import { Resolver } from '@nestjs/graphql';
import { createBaseResolver } from 'src/common/abstract/abstract.resolver';
import { OrderCreateInput, OrderUpdateInput } from './orders.dto';
import { OrdersService } from './orders.service';
import { Orders } from './orders.entity';

@Resolver()
export class OrdersResolver extends createBaseResolver(
  Orders,
  OrderCreateInput,
  OrderUpdateInput,
) {
  constructor(private readonly ordersService: OrdersService) {
    super(ordersService);
  }
}
