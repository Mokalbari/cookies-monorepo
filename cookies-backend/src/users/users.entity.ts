import { Field, HideField, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, Length, Max, Min } from 'class-validator';
import { Orders } from 'src/orders/orders.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity('users')
export class Users {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ name: 'first_name' })
  @Length(2, 20)
  firstName: string;

  @Field()
  @Column({ name: 'last_name' })
  @Length(2, 20)
  lastName: string;

  @Field()
  @Column({ type: 'int' })
  @Min(13)
  @Max(110)
  age: number;

  @Field()
  @Index()
  @Column({ unique: true })
  @IsEmail()
  email: string;

  @HideField()
  @Column({ nullable: false })
  @IsNotEmpty()
  @Length(8, 30)
  password: string;

  @Field({ nullable: true })
  @Column({ nullable: true, default: '' })
  address: string;

  @Field({ nullable: true })
  @Column({ name: 'zip_code', nullable: true, default: '' })
  zipCode: string;

  @Field({ nullable: true })
  @Column({ nullable: true, default: '' })
  country: string;

  @Field(() => Date)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Field(() => [Orders], { nullable: true })
  @OneToMany(() => Orders, (order) => order.user)
  orders?: Orders[];
}
