import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Database } from './database/database.module';
import { BuddiesModule } from './buddies/buddies.module';
import { GroupsModule } from './groups/groups.module';
import { MeetingsModule } from './meetings/meetings.module';
import { QuestionsModule } from './questions/questions.module';
@Module({
  imports: [SequelizeModule.forRoot(Database), UsersModule, BuddiesModule, GroupsModule, MeetingsModule, QuestionsModule],
})
export class AppModule {}
