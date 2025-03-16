import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DateTimeResolver } from 'graphql-scalars';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CookiesModule } from './cookies/cookies.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      resolvers: {
        DateTime: DateTimeResolver,
      },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
      ssl: process.env.DATABASE_URL?.includes('neon.tech')
        ? { rejectUnauthorized: false }
        : false,
    }),
    UsersModule,
    CookiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
