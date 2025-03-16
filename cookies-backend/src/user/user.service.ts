import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  getUser(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  createUser(userData: Partial<User>): Promise<User> {
    const newUser = this.userRepository.create(userData);
    return this.userRepository.save(newUser);
  }

  _seedUser(userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) {
    const newUser = this.userRepository.create(userData);
    return this.userRepository.save(newUser);
  }
}
