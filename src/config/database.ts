import { DataSource } from 'typeorm';
import { BitGridEntity } from '../models/BitGrid';

const config = process.env.DATABASE_URL
  ? {
      // Railway configuration
      type: 'postgres' as const,
      url: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
      synchronize: false,
    }
  : {
      // Local configuration
      type: 'postgres' as const,
      host: process.env.PGHOST || 'localhost',
      port: parseInt(process.env.PGPORT || '5432'),
      username: process.env.PGUSER || 'kevin.connell',
      password: process.env.PGPASSWORD || '',
      database: process.env.PGDATABASE || 'bitgrid',
      synchronize: process.env.NODE_ENV !== 'production',
    };

export const AppDataSource = new DataSource({
  ...config,
  logging: process.env.NODE_ENV !== 'production',
  entities: [BitGridEntity],
  migrations: [],
  subscribers: [],
});
