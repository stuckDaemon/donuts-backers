import { Injectable } from '@nestjs/common';
import { Buddy } from './entities/buddy.entity';
import { GroupsService } from '../groups/groups.service';

@Injectable()
export class BuddiesService {
  readonly NUMBER_OF_BUDDIES = 1000;
  readonly GROUP_SIZE = 4;
  readonly GROUP_NUMBER = Math.floor(this.NUMBER_OF_BUDDIES / this.GROUP_SIZE);

  private groupService = new GroupsService();

  async start(): Promise<any> {
    const buddies = await this.findAll();
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

  async findAll() {
    return await Buddy.findAll();
  }
}
