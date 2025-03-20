import { Type } from '@nestjs/common';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DeepPartial } from 'typeorm';
import { AbstractService } from './abstract.service';

/**
 * @description Creates a base resolver for a given entity
 * @param classRef - The entity class
 * @param createInputType - The create input type
 * @param updateInputType - The update input type
 * @returns The base resolver
 */
export function createBaseResolver<
  T extends { id: string | number },
  CreateInput extends DeepPartial<T> = DeepPartial<T>,
  UpdateInput extends DeepPartial<T> = DeepPartial<T>,
>(
  classRef: Type<T>,
  createInputType?: Type<CreateInput>,
  updateInputType?: Type<UpdateInput>,
) {
  @Resolver({ isAbstract: true })
  abstract class BaseResolver {
    constructor(public readonly service: AbstractService<T>) {}

    @Query(() => [classRef], { name: `findAll${classRef.name}` })
    async findAll(skip: number, take: number): Promise<T[]> {
      return this.service.findAll(skip, take);
    }

    @Query(() => classRef, { name: `findOne${classRef.name}` })
    async findOne(@Args('id', { type: () => ID }) id: string): Promise<T> {
      return this.service.findOne(id);
    }

    @Mutation(() => classRef, { name: `create${classRef.name}` })
    async create(
      @Args('input', { type: () => createInputType }) input: CreateInput,
    ): Promise<T> {
      return this.service.create(input);
    }

    @Mutation(() => classRef, { name: `update${classRef.name}` })
    async update(
      @Args('id', { type: () => ID }) id: string,
      @Args('input', { type: () => updateInputType }) input: UpdateInput,
    ): Promise<T> {
      return this.service.update(id, input);
    }

    @Mutation(() => Boolean, { name: `remove${classRef.name}` })
    async remove(@Args('id', { type: () => ID }) id: string): Promise<boolean> {
      return this.service.remove(id);
    }
  }

  return BaseResolver;
}
