import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cookies } from './cookies.entity';
import { CookiesResolver } from './cookies.resolver';
import { CookiesService } from './cookies.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cookies])],
  providers: [CookiesResolver, CookiesService],
})
export class CookiesModule {}
