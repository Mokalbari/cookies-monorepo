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

  async getCookies(): Promise<Cookies[]> {
    return this.cookiesRepository.find();
  }

  async getCookie(id: string): Promise<Cookies | null> {
    return this.cookiesRepository.findOneBy({ id });
  }

  async getShowcasedCookies(): Promise<Cookies[]> {
    return this.cookiesRepository.find({
      select: {
        isShowcased: true,
      },
    });
  }

  async _seedCookie(
    cookieData: Omit<Cookies, 'id' | 'createdAt' | 'updatedAt'>,
  ) {
    const newCookie = this.cookiesRepository.create(cookieData);
    return this.cookiesRepository.save(newCookie);
  }
}
