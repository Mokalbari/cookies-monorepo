import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { TimestampsEntity } from 'src/common/abstract/abstract.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { OrderItems } from '../order-items/order-items.entity';
import { Users } from '../users/users.entity';

export enum OrderStatus {
  PENDING = 'PENDING',
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED',
}

registerEnumType(OrderStatus, {
  name: 'OrderStatus',
});

@ObjectType()
@Entity('orders')
export class Orders extends TimestampsEntity {
  @Field(() => OrderStatus)
  @Column({
    name: 'order_status',
    default: OrderStatus.PENDING,
    type: 'enum',
    enum: OrderStatus,
  })
  orderStatus: OrderStatus;

  @Field(() => Number)
  @Column({ type: 'numeric', precision: 10, scale: 2, default: 0 })
  total: number;

  @Field(() => Users)
  @ManyToOne(() => Users, (user) => user.orders)
  @JoinColumn({ name: 'user_id' })
  user: Users;

  @Field(() => [OrderItems])
  @OneToMany(() => OrderItems, (item) => item.order)
  items: OrderItems[];
}
