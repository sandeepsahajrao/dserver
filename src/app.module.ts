import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config/dist';
import { MongooseModule } from '@nestjs/mongoose';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { WriteCodeModule } from './write-code/write-code.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env'] }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (ConfigService: ConfigService) => {
        // uri: ConfigService.get('MONGO_URI'),

        const pass=ConfigService.get("dB_PASSWORD");
        const username=ConfigService.get("dB_USERNAME");
        const uri=`mongodb+srv://${username}:${pass}@hiconsolar1.0a0d9nn.mongodb.net/HICOUNSELOR?retryWrites=true&w=majority`;
        // console.log("connected to mongodb server ")
        return {
          uri,
        }
      },
      inject: [ConfigService],
    }),
    UsersModule,
    WriteCodeModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
