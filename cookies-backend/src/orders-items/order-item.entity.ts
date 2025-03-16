import { Field, ObjectType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';
import { Cookies } from 'src/cookies/cookies.entity';
import { Orders } from 'src/orders/orders.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
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

  @Field(() => Date)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
