import { Field, ObjectType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Favorites } from 'src/modules/favorites/favorites.entity';
import { OrderItem } from 'src/modules/orders-items/order-item.entity';
import { Column, Entity, Index, OneToMany, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity('cookies')
export class Cookies extends CoreEntity {
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
  @Column({ name: 'is_showcased', nullable: false, default: false })
  @IsBoolean()
  isShowcased: boolean;

  @Field({ nullable: true })
  @Column({ name: 'image_url', nullable: true, default: '' })
  @IsUrl()
  imageUrl: string;

  @Field(() => Date, { nullable: true })
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Field(() => [OrderItem], { nullable: true })
  @OneToMany(() => OrderItem, (orderItem) => orderItem.cookie)
  orderItems?: OrderItem[];

  @Field(() => [Favorites], { nullable: true })
  @OneToMany(() => Favorites, (favorite) => favorite.cookie)
  usersFavorited: Favorites[];
}
