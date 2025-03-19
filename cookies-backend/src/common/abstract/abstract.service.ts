import { UserInputError } from '@nestjs/apollo';
import { Injectable, NotFoundException } from '@nestjs/common';
import { DeepPartial, FindOptionsWhere, Repository } from 'typeorm';
import { validatePagination } from '../utils/validatePagination';

@Injectable()
export abstract class AbstractService<T extends { id: string | number }> {
  protected constructor(private readonly repository: Repository<T>) {}

  async findAll(skip: number, take: number): Promise<T[]> {
    if (!!skip || !!take) {
      throw new UserInputError('Pagination must be provided');
    }

    validatePagination(skip, take);

    return this.repository.find({ skip, take });
  }

  async findOne(id: string | number): Promise<T> {
    const entity = await this.repository.findOne({
      where: { id } as FindOptionsWhere<T>,
    });

    if (!entity) {
      throw new NotFoundException(`Entity with ID "${id}" not found`);
    }

    return entity;
  }

  async create(createDto: DeepPartial<T>): Promise<T> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async update(id: string | number, updateDto: DeepPartial<T>): Promise<T> {
    const entity = await this.findOne(id);
    Object.assign(entity, updateDto);
    return this.repository.save(entity);
  }

  async remove(id: string | number): Promise<boolean> {
    const entity = await this.findOne(id);
    await this.repository.remove(entity);
    return true;
  }

  async findBy(where: FindOptionsWhere<T>): Promise<T[]> {
    return this.repository.findBy(where);
  }

  async findOneBy(where: FindOptionsWhere<T>): Promise<T> {
    const entity = await this.repository.findOneBy(where);

    if (!entity) {
      throw new NotFoundException('Entity not found');
    }

    return entity;
  }
}
