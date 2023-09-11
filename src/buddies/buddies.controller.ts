import { Controller, Get } from '@nestjs/common';
import { BuddiesService } from './buddies.service';

@Controller('buddies')
export class BuddiesController {
  constructor(private readonly buddiesService: BuddiesService) {}

  @Get('/start') start() {
    return this.buddiesService.start();
  }

  @Get('/generate') generate() {
    return this.buddiesService.generate();
  }
}
