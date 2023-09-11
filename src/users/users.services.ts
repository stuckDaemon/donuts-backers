import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.create(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findByPk(id: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ id: id });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async remove(id: string) {
    const userDeleted = this.userRepository.delete({ id: id });
    return `Rows Affected ${userDeleted}`;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    // Update return a number as response
    const userUpdated = await this.userRepository.update(id, updateUserDto);
    return `Rows Affected ${userUpdated}`;
  }
}
