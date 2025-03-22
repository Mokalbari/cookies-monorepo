import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract/abstract.service';
import { Repository } from 'typeorm';
import { Cookies } from './cookies.entity';

@Injectable()
export class CookiesService extends AbstractService<Cookies> {
  constructor(
    @InjectRepository(Cookies)
    private readonly cookiesRepo: Repository<Cookies>,
  ) {
    super(cookiesRepo);
  }

  async findShowcased() {
    return await this.cookiesRepo.find({ where: { isShowcased: true } });
  }
}
