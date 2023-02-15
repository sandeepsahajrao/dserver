import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GetdbModule } from './getdb/getdb.module';

@Module({
  imports: [GetdbModule],
})
export class AppModule {}