import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { Users } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';

async function bootstrap() {
  try {
    const app = await NestFactory.createApplicationContext(AppModule);
    const usersService = app.get(UsersService);

    console.log('...🌱 Seeding database.');

    const users = await usersService.getUsers();

    if (users.length > 0) {
      console.log('⚠️ Database already seeded. Exiting...');
      await app.close();
      return;
    }

    const usersData: Omit<Users, 'id' | 'createdAt' | 'updatedAt'>[] = [
      {
        firstName: 'Lucas',
        lastName: 'Meyer',
        age: 36,
        email: 'lucas.meyer@example.com',
        address: '123 Maple Street',
        country: 'France',
        zipCode: '75001',
        password: '123',
      },
      {
        firstName: 'Laura',
        lastName: 'Smith',
        age: 27,
        email: 'laura.smith@example.com',
        address: '456 Oak Avenue',
        country: 'United States',
        zipCode: '10001',
        password: '123',
      },
      {
        firstName: 'David',
        lastName: 'Johnson',
        age: 18,
        email: 'david.johnson@example.com',
        address: '789 Pine Road',
        country: 'United Kingdom',
        zipCode: 'SW1A 1AA',
        password: '123',
      },
      {
        firstName: 'Emma',
        lastName: 'Williams',
        age: 30,
        email: 'emma.williams@example.com',
        address: '101 Birch Lane',
        country: 'Canada',
        zipCode: 'M4B 1B3',
        password: '123',
      },
      {
        firstName: 'Nathan',
        lastName: 'Garcia',
        age: 22,
        email: 'nathan.garcia@example.com',
        address: '202 Cedar Court',
        country: 'Spain',
        zipCode: '28001',
        password: '123',
      },
    ];

    for (const userData of usersData) {
      await usersService._seedUser(userData);
    }

    console.log('✅ Seeding complete!');
  } catch (error) {
    console.error('Error while trying to seed users, ', error);
  }
}

bootstrap();
