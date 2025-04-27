import { DataSource } from 'typeorm';
import { BitGridEntity } from '../models/BitGrid';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER || 'kevin.connell',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'bitgrid',
  synchronize: process.env.NODE_ENV !== 'production',
  logging: process.env.NODE_ENV !== 'production',
  entities: [BitGridEntity],
  migrations: [],
  subscribers: [],
});
