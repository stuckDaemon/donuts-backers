import { Injectable } from '@nestjs/common';
import { Meeting } from './entities/meeting.entity';

@Injectable()
export class MeetingsService {
  async create(meeting: Meeting) {
    return await Meeting.create({ meeting });
  }
}
