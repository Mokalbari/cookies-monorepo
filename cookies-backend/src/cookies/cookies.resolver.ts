import { Args, Query, Resolver } from '@nestjs/graphql';
import { Cookies } from './cookies.entity';
import { CookiesService } from './cookies.service';

@Resolver()
export class CookiesResolver {
  constructor(private readonly cookiesService: CookiesService) {}

  @Query(() => [Cookies])
  cookies(): Promise<Cookies[]> {
    return this.cookiesService.getCookies();
  }

  @Query(() => Cookies, { nullable: true })
  cookie(@Args('id') id: number): Promise<Cookies | null> {
    return this.cookiesService.getCookie(id);
  }

  @Query(() => [Cookies])
  showcasedCookies(): Promise<Cookies[]> {
    return this.cookiesService.getShowcasedCookies();
  }
}
