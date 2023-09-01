import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  timestamps: true,
  paranoid: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  freezeTableName: true,
  tableName: 'Buddies',
})
export class Buddy extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string; // Change data type to string for UUID

  @Column
  name: string;
}
