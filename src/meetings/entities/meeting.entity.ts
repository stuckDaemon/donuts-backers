import { Group } from '../../groups/entities/group.entity';
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Meeting {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Group)
  @JoinColumn()
  group: Group;
}
