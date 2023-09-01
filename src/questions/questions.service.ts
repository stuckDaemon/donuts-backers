import { Injectable } from '@nestjs/common';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionsService {
  async getOne(): Promise<Question> {
    const questions = await Question.findAll();
    return questions[questions.length * Math.random()];
  }

  async findAll(): Promise<Question[]> {
    return await Question.findAll();
  }
}
