import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import {
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
  IsStrongPassword,
  Length,
  Matches,
  Max,
  Min,
} from 'class-validator';

@InputType({ isAbstract: true })
export abstract class UserDTO {
  @Field(() => String)
  @IsString()
  @Length(3, 50)
  firstName: string;

  @Field(() => String)
  @IsString()
  @Length(3, 50)
  lastName: string;

  @Field(() => Int)
  @IsInt()
  @Min(18)
  @Max(110)
  age: number;

  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @Length(5, 100)
  address: string;

  @Field(() => String)
  @IsString()
  @Length(3, 100)
  country: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @Length(3, 10)
  @Matches(/^[A-Za-z0-9- ]+$/, { message: 'Invalid zip code format' })
  zipCode: string;

  @Field(() => String)
  @IsStrongPassword()
  password: string;
}

@InputType()
export class UserCreateInput extends UserDTO {}

@InputType()
export class UserUpdateInput extends PartialType(UserCreateInput) {}
