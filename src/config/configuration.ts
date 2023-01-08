import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default () => ({
  port: parseInt(process.env.APP_PORT || '5000', 10),
});

export const databaseConfig = (): TypeOrmModuleOptions => ({
  type: 'mariadb',
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: parseInt(process.env.MYSQL_TCP_PORT || '3306', 10),
  entities: [],
  synchronize: true,
});