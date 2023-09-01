import { ConfigModule } from '@nestjs/config';
import { Dialect } from 'sequelize/types';
ConfigModule.forRoot();

export const Database = {
  dialect: process.env.DB_DIALECT as Dialect,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  autoLoadModels: true,
  synchronize: true,
};
