import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { Group } from '../../groups/entities/group.entity';

@Table({
  timestamps: true,
  paranoid: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  freezeTableName: true,
  tableName: 'Meetings',
})
export class Meeting extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string; // Change data type to string for UUID

  @Column
  group: Group;
}
