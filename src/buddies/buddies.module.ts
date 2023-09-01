import { Module } from '@nestjs/common';
import { BuddiesService } from './buddies.service';
import { BuddiesController } from './buddies.controller';

@Module({
  controllers: [BuddiesController],
  providers: [BuddiesService]
})
export class BuddiesModule {}
