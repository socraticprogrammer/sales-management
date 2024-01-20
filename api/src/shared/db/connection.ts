import { DataSource } from 'typeorm';

const databaseConnection = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'sales-management',
});

export default databaseConnection;
