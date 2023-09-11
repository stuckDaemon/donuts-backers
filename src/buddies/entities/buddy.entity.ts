import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Group } from '../../groups/entities/group.entity';

@Entity()
export class Buddy {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(() => Group, (group) => group.buddies)
  group: Group;
}
