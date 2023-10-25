import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './infra/db/database.providers';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRootAsync(databaseProviders), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
