import { Field, InputType, Int } from '@nestjs/graphql';
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

@InputType()
export class CookieCreateInput {
  @Field(() => String)
  @IsString()
  @Length(3, 50)
  name: string;

  @Field(() => String)
  @IsUrl()
  imageUrl: string;

  @Field(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(1)
  @Max(100)
  price: number;

  @Field(() => String)
  @IsString()
  @Length(3, 100)
  description: string;

  @Field(() => Boolean)
  @IsBoolean()
  isShowcased: boolean;

  @Field(() => Int)
  @IsInt()
  @Min(0)
  @Max(1000)
  stock: number;
}

@InputType()
export class CookieUpdateInput {
  @Field(() => String, { nullable: true })
  @IsString()
  @Length(3, 50)
  name?: string;

  @Field(() => String, { nullable: true })
  @IsUrl()
  imageUrl?: string;

  @Field(() => Number, { nullable: true })
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(1)
  @Max(100)
  price?: number;

  @Field(() => String, { nullable: true })
  @IsString()
  @Length(3, 100)
  description?: string;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  isShowcased?: boolean;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @Min(0)
  @Max(1000)
  stock?: number;
}
