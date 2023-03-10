import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { HashEntity } from '../hashes/hash.entity';

export default () => ({
  appName: process.env.APP_NAME || 'app',
  port: parseInt(process.env.APP_PORT || '5000', 10),
  mainRoute: process.env.APP_MAIN_ROUTE || 'hashes',
});

export const databaseConfig = (): TypeOrmModuleOptions => ({
  type: 'mariadb',
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: parseInt(process.env.MYSQL_TCP_PORT || '3306', 10),
  entities: [HashEntity],
  synchronize: true,
});
