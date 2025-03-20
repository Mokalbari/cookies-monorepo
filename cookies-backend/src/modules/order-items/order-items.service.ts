import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract/abstract.service';
import { Repository } from 'typeorm';
import { OrderItems } from './order-items.entity';

@Injectable()
export class OrderItemsService extends AbstractService<OrderItems> {
  constructor(
    @InjectRepository(OrderItems)
    private readonly orderItemsRepo: Repository<OrderItems>,
  ) {
    super(orderItemsRepo);
  }
}
