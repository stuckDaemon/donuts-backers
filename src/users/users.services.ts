import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto): Promise<User> {
    return await User.create(createUserDto as any);
  }

  async findAll(): Promise<User[]> {
    return await User.findAll();
  }

  async findByPk(id: string): Promise<User> {
    const user = await User.findByPk(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async remove(id: string) {
    // Destroy return a number as response
    const userDeleted = await User.destroy({
      where: {
        id: id,
      },
    });
    return `Rows Affected ${userDeleted}`;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    // Update return a number as response
    const userUpdated = await User.update(updateUserDto, {
      where: {
        id: id,
      },
    });
    return `Rows Affected ${userUpdated}`;
  }
}
