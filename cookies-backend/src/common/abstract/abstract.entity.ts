import { Field, ObjectType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * @description The core entity class
 */
@ObjectType({ isAbstract: true })
export abstract class CoreEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => Date)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}

/**
 * @description The timestamps entity class
 * @extends CoreEntity
 */
@ObjectType({ isAbstract: true })
export abstract class TimestampsEntity extends CoreEntity {
  @Field(() => Date, { nullable: true })
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  @DeleteDateColumn({ name: 'deleted_at' })
  @IsOptional()
  deletedAt: Date;
}
