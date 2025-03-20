import { UserInputError } from '@nestjs/apollo';

/**
 * @description Validates the pagination parameters
 * @param skip - The skip (how many items to skip) parameter
 * @param take - The take (how many items to take) parameter
 */
export function validatePagination(skip: number, take: number) {
  if (skip == null || take == null) {
    throw new UserInputError('Pagination must be provided');
  }

  if (!Number.isInteger(skip) || !Number.isInteger(take)) {
    throw new UserInputError('Pagination parameters must be of type number.');
  }

  if (skip < 0 || take < 1) {
    throw new UserInputError(
      `Invalid pagination input. Skip must be >= 0, current: ${skip}. Take must be >= 1, current: ${take}`,
    );
  }
}
