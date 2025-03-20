import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { TimestampsEntity } from 'src/common/abstract/abstract.entity';
import { Column, Entity } from 'typeorm';

export enum OrderStatus {
  PENDING = 'PENDING',
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED',
}

registerEnumType(OrderStatus);

@ObjectType()
@Entity('orders')
export class Orders extends TimestampsEntity {
  @Field(() => OrderStatus)
  @Column({ name: 'order_status', default: OrderStatus.PENDING })
  orderStatus: OrderStatus;

  @Field(() => Number)
  @Column({ type: 'numeric', precision: 10, scale: 2 })
  total: number;
}
