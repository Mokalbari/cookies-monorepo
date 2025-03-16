import { Field, ObjectType } from '@nestjs/graphql';
import { Cookies } from 'src/cookies/cookies.entity';
import { Orders } from 'src/orders/orders.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity('order_items') // clearer for db convention
export class OrderItem {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column('int')
  quantity: number;

  @Field()
  @Column('decimal', { scale: 10, precision: 2 })
  price: number;

  @Field(() => Orders)
  @ManyToOne(() => Orders, (order) => order.orderItem, {
    onDelete: 'CASCADE',
    eager: false,
  })
  order: Orders;

  @Field(() => Cookies)
  @ManyToOne(() => Cookies, { onDelete: 'CASCADE' })
  cookie: Cookies;

  @Field(() => Date)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
