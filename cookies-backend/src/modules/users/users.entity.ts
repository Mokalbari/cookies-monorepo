import { Field, HideField, Int, ObjectType } from '@nestjs/graphql';
import { TimestampsEntity } from 'src/common/abstract/abstract.entity';
import { Column, Entity, JoinTable, ManyToMany, Unique } from 'typeorm';
import { Cookies } from '../cookies/cookies.entity';

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
  @Column()
  password: string;

  @ManyToMany(() => Cookies)
  @JoinTable({ name: 'favorite_cookies' })
  cookies: Cookies[];
}
