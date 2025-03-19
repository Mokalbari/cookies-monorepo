import { Field, ObjectType } from '@nestjs/graphql';
import { CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class CoreEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => Date)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
