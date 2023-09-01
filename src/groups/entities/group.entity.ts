import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { Buddy } from '../../buddies/entities/buddy.entity';
import { Question } from '../../questions/entities/question.entity';

@Table({
  timestamps: true,
  paranoid: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  freezeTableName: true,
  tableName: 'Groups',
})
export class Group extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id?: string; // Change data type to string for UUID

  @Column
  name?: string;

  @Column
  breakingIceQuestion?: Question;

  @Column
  buddies?: Buddy[];
}
