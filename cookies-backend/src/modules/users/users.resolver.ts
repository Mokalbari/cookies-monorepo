import { Resolver } from '@nestjs/graphql';
import { createBaseResolver } from 'src/common/abstract/abstract.resolver';
import { UserCreateInput, UserUpdateInput } from './users.dto';
import { Users } from './users.entity';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver extends createBaseResolver(
  Users,
  UserCreateInput,
  UserUpdateInput,
) {
  constructor(private readonly usersService: UsersService) {
    super(usersService);
  }
}
