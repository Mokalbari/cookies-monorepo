import { BadRequestException } from '@nestjs/common';

export function validatePagination(skip: number, take: number) {
  if (skip < 0 || take < 1) {
    throw new BadRequestException('Invalid pagination input');
  }
}
