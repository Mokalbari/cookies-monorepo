import { Resolver } from '@nestjs/graphql';
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
  constructor(private cookiesService: CookiesService) {
    super(cookiesService);
  }
}
