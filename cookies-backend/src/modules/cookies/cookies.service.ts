import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cookies } from './cookies.entity';

@Injectable()
export class CookiesService {
  constructor(
    @InjectRepository(Cookies)
    private readonly cookiesRepository: Repository<Cookies>,
  ) {}

  getCookies(): Promise<Cookies[]> {
    return this.cookiesRepository.find();
  }

  getCookie(id: string): Promise<Cookies | null> {
    return this.cookiesRepository.findOneBy({ id });
  }

  getShowcasedCookies(): Promise<Cookies[]> {
    return this.cookiesRepository.find({
      select: {
        isShowcased: true,
      },
    });
  }

  _seedCookie(cookieData: Omit<Cookies, 'id' | 'createdAt' | 'updatedAt'>) {
    const newCookie = this.cookiesRepository.create(cookieData);
    return this.cookiesRepository.save(newCookie);
  }
}
