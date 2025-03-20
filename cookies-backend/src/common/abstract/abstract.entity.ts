import { Field, ObjectType } from '@nestjs/graphql';
import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * @description The core entity class
 * Defines a primary generated column and a created at timestamp
 */
@ObjectType({ isAbstract: true })
export abstract class CoreEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Field(() => Date)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}

/**
 * @description The timestamps entity class
 * @extends CoreEntity
 * Defines two additionnal fields: updated at and deleted at
 */
@ObjectType({ isAbstract: true })
export abstract class TimestampsEntity extends CoreEntity {
  @Field(() => Date, { nullable: true })
  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Field(() => Date, { nullable: true })
  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt?: Date;
}
