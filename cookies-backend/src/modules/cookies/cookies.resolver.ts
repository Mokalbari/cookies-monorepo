import { Query, Resolver } from '@nestjs/graphql';
import { createBaseResolver } from 'src/common/abstract/abstract.resolver';
import { CookieCreateInput, CookieUpdateInput } from './cookies.dto';
import { Cookies } from './cookies.entity';
import { CookiesService } from './cookies.service';

@Resolver()
export class CookiesResolver extends createBaseResolver(
  Cookies,
  CookieCreateInput,
  CookieUpdateInput,
) {
  constructor(private readonly cookiesService: CookiesService) {
    super(cookiesService);
  }

  @Query(() => [Cookies], { nullable: true })
  async findShowcasedCookies() {
    return this.cookiesService.findShowcased();
  }
}
