import { Args, Query, Resolver } from '@nestjs/graphql';
import { Cookies } from './cookies.entity';
import { CookiesService } from './cookies.service';

@Resolver()
export class CookiesResolver {
  constructor(private readonly cookiesService: CookiesService) {}

  @Query(() => [Cookies])
  async cookies(): Promise<Cookies[]> {
    return this.cookiesService.getCookies();
  }

  @Query(() => Cookies, { nullable: true })
  async cookie(@Args('id') id: string): Promise<Cookies | null> {
    return this.cookiesService.getCookie(id);
  }

  @Query(() => [Cookies])
  async showcasedCookies(): Promise<Cookies[]> {
    return this.cookiesService.getShowcasedCookies();
  }
}
