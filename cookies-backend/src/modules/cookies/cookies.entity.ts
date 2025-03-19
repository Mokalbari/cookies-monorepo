import { Field, Int, ObjectType } from '@nestjs/graphql';
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
  imageUrl: string;

  @Field(() => Number)
  @Column({ type: 'numeric', precision: 10, scale: 2 })
  price: number;

  @Field(() => String)
  description: string;

  @Field(() => Boolean)
  @Column({ name: 'is_showcased', default: false })
  isShowcased: boolean;

  @Field(() => Int)
  @Column({ type: 'int', default: 0 })
  stock: number;
}
