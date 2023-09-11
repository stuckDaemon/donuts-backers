import { Buddy } from '../../buddies/entities/buddy.entity';
import { Question } from '../../questions/entities/question.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Group {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToOne(() => Question)
  @JoinColumn()
  breakingIceQuestion?: Question;

  @OneToMany(() => Buddy, (buddy) => buddy.group)
  buddies?: Buddy[];
}
