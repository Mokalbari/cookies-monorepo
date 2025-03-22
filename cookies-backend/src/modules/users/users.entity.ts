import {
  Field,
  HideField,
  Int,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { TimestampsEntity } from 'src/common/abstract/abstract.entity';
import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
  Unique,
} from 'typeorm';
import { Cookies } from '../cookies/cookies.entity';
import { Orders } from '../orders/orders.entity';

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  BANNED = 'BANNED',
}

registerEnumType(UserRole, {
  name: 'UserRole',
});

@ObjectType()
@Entity('users')
export class Users extends TimestampsEntity {
  @Field(() => String)
  @Column({ name: 'first_name' })
  firstName: string;

  @Field(() => String)
  @Column({ name: 'last_name' })
  lastName: string;

  @Field(() => Int)
  @Column({ type: 'int' })
  age: number;

  @Field(() => String)
  @Unique(['email'])
  @Index()
  @Column()
  email: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, default: '' })
  address: string;

  @Field(() => String)
  @Column()
  country: string;

  @Field(() => String, { nullable: true })
  @Column({ name: 'zip_code', nullable: true, default: '' })
  zipCode: string;

  @HideField()
  @Column({ select: false })
  password: string;

  @Field(() => UserRole)
  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
    name: 'role',
  })
  role: UserRole;

  @ManyToMany(() => Cookies)
  @JoinTable({ name: 'favorite_cookies' })
  cookies: Cookies[];

  @OneToMany(() => Orders, (order) => order.user)
  orders: Orders[];
}
