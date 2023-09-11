import { Inject, Injectable } from '@nestjs/common';
import { Buddy } from './entities/buddy.entity';
import { GroupsService } from '../groups/groups.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';

@Injectable()
export class BuddiesService {
  constructor(
    @InjectRepository(Buddy)
    private buddyRepository: Repository<Buddy>,
  ) {}

  @Inject(GroupsService)
  private groupService: GroupsService;

  async start(): Promise<any> {
    const buddies = await this.buddyRepository.find();
    const groups = await this.groupService.createGroups();
    const groupsToMeet = await this.groupService.populateGroups(
      buddies,
      groups,
    );

    console.log(`We created ${groupsToMeet.length} groups`);
    groupsToMeet.map((group) => {
      console.log(`= ${group.name}`);
    });
    console.log(`...`);
    console.log(`send invitation`);

    await new Promise((r) => setTimeout(r, 2000));
    console.log(`Invitation sent`);
  }

  async generate() {
    const buddies = [];
    for (let i = 0; i < 1000; i++) {
      const buddy = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
      } as Buddy;
      buddies.push(buddy);
    }
    return this.buddyRepository.save(buddies);
  }
}
