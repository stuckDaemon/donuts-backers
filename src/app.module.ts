import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BuddiesModule } from './buddies/buddies.module';
import { GroupsModule } from './groups/groups.module';
import { MeetingsModule } from './meetings/meetings.module';
import { QuestionsModule } from './questions/questions.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    UsersModule,
    BuddiesModule,
    GroupsModule,
    MeetingsModule,
    QuestionsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 4111,
      username: 'user',
      password: 'password',
      database: 'db',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
