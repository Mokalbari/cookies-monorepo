import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  users(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Query(() => User, { nullable: true })
  user(@Args('id') id: number): Promise<User | null> {
    return this.userService.getUser(id);
  }
}
