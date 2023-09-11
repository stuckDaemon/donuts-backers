import { Module } from '@nestjs/common';
import { User } from './users.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.services';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
