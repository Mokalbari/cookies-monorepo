import { Field, HideField, ObjectType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Favorites } from 'src/modules/favorites/favorites.entity';
import { Orders } from 'src/modules/orders/orders.entity';
import { Column, Entity, Index, OneToMany, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity('users')
export class Users extends CoreEntity {
  @Field()
  @Column({ name: 'first_name' })
  @Length(2, 20)
  @IsString()
  firstName: string;

  @Field()
  @Column({ name: 'last_name' })
  @Length(2, 20)
  @IsString()
  lastName: string;

  @Field()
  @Column({ type: 'int' })
  @Min(13)
  @Max(110)
  @IsNumber()
  age: number;

  @Field()
  @Index()
  @Column({ unique: true })
  @IsEmail()
  @IsString()
  email: string;

  @HideField()
  @Column({ nullable: false })
  @IsNotEmpty()
  @Length(8, 30)
  @IsString()
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

  @Field(() => Date, { nullable: true })
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Field(() => [Orders], { nullable: true })
  @OneToMany(() => Orders, (order) => order.user)
  orders?: Orders[];

  @Field(() => [Favorites], { nullable: true })
  @OneToMany(() => Favorites, (favorite) => favorite.user)
  favoritedCookie: Favorites[];
}
