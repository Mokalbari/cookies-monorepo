import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
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

@InputType({ isAbstract: true })
export abstract class CookieDTO {
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
export class CookieCreateInput extends CookieDTO {}

@InputType()
export class CookieUpdateInput extends PartialType(CookieCreateInput) {}
