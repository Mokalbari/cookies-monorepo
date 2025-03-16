import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  getUsers(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  getUser(id: number): Promise<Users | null> {
    return this.usersRepository.findOneBy({ id });
  }

  createUser(userData: Partial<Users>): Promise<Users> {
    const newUser = this.usersRepository.create(userData);
    return this.usersRepository.save(newUser);
  }

  _seedUser(userData: Omit<Users, 'id' | 'createdAt' | 'updatedAt'>) {
    const newUser = this.usersRepository.create(userData);
    return this.usersRepository.save(newUser);
  }
}
