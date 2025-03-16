import { Field, ObjectType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';
import { OrderItem } from 'src/orders-items/order-item.entity';
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
@Entity('cookies')
export class Cookies {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ nullable: false })
  @Length(2, 16)
  @IsNotEmpty()
  @IsString()
  @Index()
  name: string;

  @Field()
  @Column()
  @Length(2, 100)
  @IsString()
  description: string;

  @Field()
  @Column('decimal', { precision: 10, scale: 2, default: 0, nullable: false })
  @IsNumber()
  price: number;

  @Field({ nullable: false })
  @Column({ nullable: false, default: false })
  @IsBoolean()
  isShowcased: boolean;

  @Field({ nullable: true })
  @Column({ nullable: true, default: '' })
  @IsUrl()
  imageUrl: string;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(() => [OrderItem], { nullable: true })
  @OneToMany(() => OrderItem, (orderItem) => orderItem.cookie)
  orderItems?: OrderItem[];
}
