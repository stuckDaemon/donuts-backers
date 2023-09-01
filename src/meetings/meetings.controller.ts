import { Controller, Post, Body } from '@nestjs/common';
import { MeetingsService } from './meetings.service';
import { Meeting } from './entities/meeting.entity';

@Controller('meetings')
export class MeetingsController {
  constructor(private readonly meetingsService: MeetingsService) {}

  @Post() create(@Body() meeting: Meeting) {
    return this.meetingsService.create(meeting);
  }
}
