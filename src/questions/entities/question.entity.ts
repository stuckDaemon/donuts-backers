import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  timestamps: true,
  paranoid: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  freezeTableName: true,
  tableName: 'Questions',
})
export class Question extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column
  text: string;
}
