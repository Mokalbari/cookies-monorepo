import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { Cookies } from 'src/cookies/cookies.entity';
import { CookiesService } from 'src/cookies/cookies.service';

async function bootstrap() {
  try {
    const app = await NestFactory.createApplicationContext(AppModule);
    const cookiesService = app.get(CookiesService);

    console.log('...🌱 Seeding database.');

    const cookies = await cookiesService.getCookies();

    if (cookies.length > 0) {
      console.log('⚠️ Database already seeded. Exiting...');
      await app.close();
      return;
    }

    const cookiesData: Omit<Cookies, 'id' | 'createdAt' | 'updatedAt'>[] = [
      {
        name: 'Le Boss',
        description: 'Il a de grosses noisettes',
        imageUrl:
          'https://res.cloudinary.com/dtzaaxrij/image/upload/v1742135319/cookies/obkdhrcfpikztspm5lxn.png',
        isShowcased: true,
        price: 3.99,
      },
      {
        name: "L'Alpla",
        description: 'Généreux, puissant et bien garni',
        imageUrl:
          'https://res.cloudinary.com/dtzaaxrij/image/upload/v1742135319/cookies/bsz7fkkbl3mddthpdllw.png',
        isShowcased: true,
        price: 4.59,
      },
      {
        name: 'Le Privilégié',
        description: 'Cookie édition limitée avec des ingrédients premium',
        imageUrl:
          'https://res.cloudinary.com/dtzaaxrij/image/upload/v1742135319/cookies/npsrnxh2wbvypokzcax4.png',
        isShowcased: true,
        price: 5.99,
      },
      {
        name: 'Le Sucré',
        description: 'Le détourné au chocolat blanc',
        imageUrl:
          'https://res.cloudinary.com/dtzaaxrij/image/upload/v1742135319/cookies/ef1fcz998c6xcsuqoinw.png',
        isShowcased: false,
        price: 4.59,
      },
    ];

    for (const cookieData of cookiesData) {
      await cookiesService._seedCookie(cookieData);
    }

    console.log('✅ Seeding complete!');
  } catch (error) {
    console.error('Error while trying to seed users, ', error);
  }
}

bootstrap();
