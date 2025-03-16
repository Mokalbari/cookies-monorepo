import { Field, ObjectType } from '@nestjs/graphql';
import { OrderItem } from 'src/orders-items/orders-items.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity('cookies')
export class Cookies {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Field({ nullable: true })
  @Column({ nullable: true, default: false })
  isShowcased: boolean;

  @Field({ nullable: true })
  @Column({ nullable: true })
  imageUrl: string;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(() => [OrderItem], { nullable: true })
  @OneToMany(() => OrderItem, (orderItem) => orderItem.cookie)
  orderItems?: OrderItem;
}
