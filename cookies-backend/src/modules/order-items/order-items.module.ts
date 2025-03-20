import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItems } from './order-items.entity';
import { OrderItemsResolver } from './order-items.resolver';
import { OrderItemsService } from './order-items.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderItems])],
  providers: [OrderItemsResolver, OrderItemsService],
})
export class OrderItemsModule {}
