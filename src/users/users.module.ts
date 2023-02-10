import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Signup, SignupSchema } from './schema/signup';

@Module({
  imports:[MongooseModule.forFeature([{name:Signup.name,schema:SignupSchema}])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
