import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const databaseProviders: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: () => ({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: 3306,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    autoLoadEntities: true,
    ssl: {
      rejectUnauthorized: true,
    },
    synchronize: false,
  }),
  inject: [ConfigService],
};
