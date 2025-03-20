import { Resolver } from '@nestjs/graphql';
import { createBaseResolver } from 'src/common/abstract/abstract.resolver';
import { OrdersService } from './orders.service';

@Resolver()
export class OrdersResolver extends createBaseResolver() {
  constructor(private readonly ordersService: OrdersService) {
    super(ordersService);
  }
}
