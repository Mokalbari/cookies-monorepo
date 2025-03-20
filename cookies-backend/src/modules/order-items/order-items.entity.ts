import { Field, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/abstract/abstract.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Cookies } from '../cookies/cookies.entity';
import { Orders } from '../orders/orders.entity';

@ObjectType()
@Entity('order_items')
export class OrderItems extends CoreEntity {
  @Field(() => Cookies)
  @ManyToOne(() => Cookies, (cookie) => cookie.orderItems)
  @JoinColumn({ name: 'cookie_id' })
  cookie: Cookies;

  @Field(() => Orders)
  @ManyToOne(() => Orders, (order) => order.items)
  @JoinColumn({ name: 'order_id' })
  order: Orders;

  @Field(() => Number)
  @Column({ type: 'int', default: 1 })
  quantity: number;
}
