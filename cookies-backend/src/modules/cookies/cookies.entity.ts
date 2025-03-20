import { Field, Int, ObjectType } from '@nestjs/graphql';
import { TimestampsEntity } from 'src/common/abstract/abstract.entity';
import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { OrderItems } from '../order-items/order-items.entity';
import { Users } from '../users/users.entity';

@ObjectType()
@Entity('cookies')
export class Cookies extends TimestampsEntity {
  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column({ name: 'image_url' })
  imageUrl: string;

  @Field(() => Number)
  @Column({ type: 'numeric', precision: 10, scale: 2 })
  price: number;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  description: string;

  @Field(() => Boolean)
  @Column({ name: 'is_showcased', default: false })
  isShowcased: boolean;

  @Field(() => Int)
  @Column({ type: 'int', default: 0 })
  stock: number;

  @ManyToMany(() => Users, (user) => user.cookies)
  users: Users[];

  @OneToMany(() => OrderItems, (item) => item.cookie)
  orderItems: OrderItems[];
}
