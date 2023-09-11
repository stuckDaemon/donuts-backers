import { Module } from '@nestjs/common';
import { BuddiesService } from './buddies.service';
import { BuddiesController } from './buddies.controller';
import { Buddy } from './entities/buddy.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupsModule } from '../groups/groups.module';

@Module({
  imports: [TypeOrmModule.forFeature([Buddy]), GroupsModule],
  controllers: [BuddiesController],
  providers: [BuddiesService],
  exports: [BuddiesService],
})
export class BuddiesModule {}
