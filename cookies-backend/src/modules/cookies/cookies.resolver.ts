import { Resolver } from '@nestjs/graphql';
import { createBaseResolver } from 'src/common/abstract/abstract.resolver';
import { Cookies } from './cookies.entity';
import { CookiesService } from './cookies.service';

@Resolver()
export class CookiesResolver extends createBaseResolver(Cookies) {
  constructor(private cookiesService: CookiesService) {
    super(cookiesService);
  }
}
