import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';
import { OrderItem } from 'src/orders-items/order-item.entity';
import { Users } from 'src/users/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

enum Status {
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  CANCELLED = 'cancelled',
}

registerEnumType(Status, {
  name: 'Status',
});

@ObjectType()
@Entity('orders')
export class Orders {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  @IsNumber()
  totalPrice: number;

  @Field()
  @Column({
    type: 'enum',
    enum: Status,
    default: Status.PENDING,
    nullable: false,
  })
  @Index()
  status: Status;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(() => Users)
  @ManyToOne(() => Users, (user) => user.orders, {
    onDelete: 'CASCADE',
    eager: false,
  })
  user: Users;

  @Field(() => [OrderItem], { nullable: true })
  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  orderItems?: OrderItem[];
}
