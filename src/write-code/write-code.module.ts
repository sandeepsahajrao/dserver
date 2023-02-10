import { Module } from '@nestjs/common';
import { WriteCodeService } from './write-code.service';
import { WriteCodeController } from './write-code.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CodeSchema, writeCode } from './schema/WritecodeSchema';

@Module({
  // imports:[MongooseModule.forFeature([{name:Signup.name,schema:SignupSchema}])],
  imports:[MongooseModule.forFeature([{name:writeCode.name,schema:CodeSchema}])],
  controllers: [WriteCodeController],
  providers: [WriteCodeService]
})
export class WriteCodeModule {}
