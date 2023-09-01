import { Controller, Get } from '@nestjs/common';
import { BuddiesService } from './buddies.service';

@Controller('buddies')
export class BuddiesController {
  constructor(private readonly buddiesService: BuddiesService) {}

  @Get() start() {
    return this.buddiesService.start();
  }
}
