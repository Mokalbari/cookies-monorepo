import { NestFactory } from '@nestjs/core';
import { error } from 'console';
import { AppModule } from 'src/app.module';
import { tryCatch } from 'src/common/utils/tryCatch';
import { CookiesService } from 'src/modules/cookies/cookies.service';
import { cookiesData } from '../lib/cookies-data';

async function seedCookies() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const cookiesService = app.get(CookiesService);

  const { data: fetchCookieData, error: fetchCookieError } = await tryCatch(
    cookiesService.findAll(0, 10),
  );

  if (fetchCookieError) {
    console.error('Error while trying to fetch cookies: ', error);
    await app.close();
    return;
  }

  if (fetchCookieData.length > 0) {
    console.log('⚠️ Database already seeded. Exiting...');
    await app.close();
    return;
  }

  const { data: createdCookies, error: createError } = await tryCatch(
    Promise.all(
      cookiesData.map((cookie) =>
        cookiesService.create({
          ...cookie,
          description: cookie.description ?? '',
        }),
      ),
    ),
  );

  if (createError) {
    console.error('Error while trying to create cookies: ', createError);
    await app.close();
    return;
  }

  if (createdCookies.length > 0) {
    console.log('✅ Seeding complete!');
  }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
seedCookies();
