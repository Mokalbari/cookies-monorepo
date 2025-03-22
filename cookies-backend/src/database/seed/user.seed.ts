import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { tryCatch } from 'src/common/utils/tryCatch';
import { UsersService } from 'src/modules/users/users.service';
import { usersData } from '../lib/users-data';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const usersService = app.get(UsersService);

  const { data: fetchUsersData, error: fetchUsersError } = await tryCatch(
    usersService.findAll(0, 10),
  );

  if (fetchUsersError) {
    console.error('Error while trying to fetch users: ', fetchUsersError);
    await app.close();
    return;
  }

  if (fetchUsersData.length > 0) {
    console.log('⚠️ Database already seeded. Exiting...');
    await app.close();
    return;
  }

  const { data: createdUsers, error: createUsersError } = await tryCatch(
    Promise.all(
      usersData.map((user) =>
        usersService.create({
          ...user,
          address: user.address ?? '',
          zipCode: user.zipCode ?? '',
        }),
      ),
    ),
  );

  if (createUsersError) {
    console.error('Error while trying to create users: ', createUsersError);
    await app.close();
    return;
  }

  if (createdUsers.length > 0) {
    console.log('✅ Seeding complete!');
  }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
