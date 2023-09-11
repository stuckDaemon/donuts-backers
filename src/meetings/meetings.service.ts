import { Injectable } from '@nestjs/common';
import { Meeting } from './entities/meeting.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MeetingsService {
  constructor(
    @InjectRepository(Meeting)
    private meetingRepository: Repository<Meeting>,
  ) {}

  async create(meeting: Meeting): Promise<Meeting> {
    return this.meetingRepository.save(meeting);
  }
}
