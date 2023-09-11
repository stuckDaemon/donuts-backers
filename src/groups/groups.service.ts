import { v4 as uuidv4 } from 'uuid';
import { Inject, Injectable } from '@nestjs/common';
import { Buddy } from '../buddies/entities/buddy.entity';
import { Group } from './entities/group.entity';
import { QuestionsService } from '../questions/questions.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';

@Injectable()
export class GroupsService {
  @InjectRepository(Group)
  private groupRepository: Repository<Group>;

  @Inject(QuestionsService)
  private questionsService: QuestionsService;

  readonly NUMBER_OF_BUDDIES = 1000;
  readonly GROUP_SIZE = 4;
  readonly GROUP_NUMBER = Math.floor(this.NUMBER_OF_BUDDIES / this.GROUP_SIZE);

  async populateGroups(buddies: Buddy[], groups: Group[]) {
    const shuffledBuddies = this.shuffle(buddies);
    let i = 0;
    for (const group of groups) {
      group.buddies = shuffledBuddies.slice(i, i + this.GROUP_SIZE);
      this.groupRepository.create(group);
      i += this.GROUP_SIZE;
    }

    return groups;
  }

  async createGroups(): Promise<Group[]> {
    const groups: Group[] = [];
    const questions = await this.questionsService.findAll();
    const shuffledQuestion = this.shuffle(questions);
    console.log('shuffledQuestion', shuffledQuestion.length);
    for (let i = 0; i < this.GROUP_NUMBER; i++) {
      const group = {
        id: uuidv4(),
        name: faker.person.firstName(),
        breakingIceQuestion: shuffledQuestion[i],
        createdAt: new Date(),
      } as Group;
      groups.push(group);
    }
    await this.groupRepository.save(groups);
    return groups;
  }

  shuffle<T>(array: T[]): T[] {
    for (
      let currentIndex = array.length - 1;
      currentIndex > 0;
      currentIndex--
    ) {
      const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }
}
