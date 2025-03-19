import { Args, Query, Resolver } from '@nestjs/graphql';
import { Users } from './users.entity';
import { UsersService } from './users.service';

@Resolver(() => Users)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [Users])
  users(): Promise<Users[]> {
    return this.usersService.getUsers();
  }

  @Query(() => Users, { nullable: true })
  user(@Args('id') id: string): Promise<Users | null> {
    return this.usersService.getUser(id);
  }
}
