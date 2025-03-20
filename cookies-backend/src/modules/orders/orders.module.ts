import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from './orders.entity';
import { OrdersResolver } from './orders.resolver';
import { OrdersService } from './orders.service';

@Module({
  imports: [TypeOrmModule.forFeature([Orders])],
  providers: [OrdersService, OrdersResolver],
})
export class OrdersModule {}
