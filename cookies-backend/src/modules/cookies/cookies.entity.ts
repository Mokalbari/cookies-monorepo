import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNumber,
  IsString,
  IsUrl,
  Length,
  Max,
  Min,
} from 'class-validator';
import { TimestampsEntity } from 'src/common/abstract/abstract.entity';
import { Column, Entity } from 'typeorm';

@ObjectType()
@Entity('cookies')
export class Cookies extends TimestampsEntity {
  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column({ name: 'image_url' })
  @IsUrl()
  imageUrl: string;

  @Field(() => Int)
  @Column({ type: 'float', scale: 10, precision: 2 })
  @IsNumber()
  @Min(1)
  @Max(100)
  price: number;

  @Field(() => String)
  @Column()
  @IsString()
  @Length(3, 100)
  description: string;

  @Field(() => Boolean)
  @Column({ name: 'is_showcased', default: false })
  @IsBoolean()
  isShowcased: boolean;

  @Field(() => Int)
  @Column({ type: 'int', default: 0 })
  @IsInt()
  @Min(0)
  @Max(1000)
  stock: number;
}
