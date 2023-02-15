import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config/dist';
import { MongooseModule } from '@nestjs/mongoose';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UsersModule } from './users/users.module';
// import { WriteCodeModule } from './write-code/write-code.module';
import { GetdbModule } from './getdb/getdb.module';


@Module({
  imports: [
    GetdbModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
