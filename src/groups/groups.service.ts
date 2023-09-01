import { uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { Buddy } from '../buddies/entities/buddy.entity';
import { Group } from './entities/group.entity';
import { names, uniqueNamesGenerator } from 'unique-names-generator';
import { sequelize } from '../../models';
import { QuestionsService } from '../questions/questions.service';

@Injectable()
export class GroupsService {
  readonly NUMBER_OF_BUDDIES = 1000;
  readonly GROUP_SIZE = 4;
  readonly GROUP_NUMBER = Math.floor(this.NUMBER_OF_BUDDIES / this.GROUP_SIZE);

  private questionService = new QuestionsService();

  async populateGroups(buddies: Buddy[], groups: Group[]) {
    const shuffledBuddies = this.shuffle(buddies);
    let i = 0;
    for (const group of groups) {
      group.buddies = shuffledBuddies.slice(i, i + this.GROUP_SIZE);
      await group.save();
      i += this.GROUP_SIZE;
    }

    return groups;
  }

  async createGroups(): Promise<Group[]> {
    const groups: Group[] = [];
    const questions = await this.questionService.findAll();
    const transaction = await sequelize.transaction();

    const shuffledQuestion = this.shuffle(questions);
    for (let i = 0; i < this.GROUP_NUMBER; i++) {
      const group = {
        id: uuidv4(),
        name: uniqueNamesGenerator({ dictionaries: [names] }),
        breakingIceQuestion: shuffledQuestion[i],
        createdAt: new Date(),
      } as Group;
      await Group.create({ group }, { transaction });
    }
    await transaction.commit();
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
