import { Field, ObjectType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';
import { CoreEntity } from 'src/common/entities/core-entity';
import { Cookies } from 'src/modules/cookies/cookies.entity';
import { Orders } from 'src/modules/orders/orders.entity';
import { Column, Entity, Index, ManyToOne, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity('order_items')
export class OrderItem extends CoreEntity {
  @Field()
  @Column('int', { default: 0, nullable: false })
  @IsNumber()
  quantity: number;

  @Field()
  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  @IsNumber()
  price: number;

  @Field(() => Orders)
  @ManyToOne(() => Orders, (order) => order.orderItems, {
    onDelete: 'CASCADE',
    eager: false,
  })
  @Index()
  order: Orders;

  @Field(() => Cookies)
  @ManyToOne(() => Cookies, { onDelete: 'CASCADE' })
  @Index()
  cookie: Cookies;

  @Field(() => Date, { nullable: true })
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
