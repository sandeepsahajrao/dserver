import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWriteCodeDto } from './dto/create-write-code.dto';
import { UpdateWriteCodeDto } from './dto/update-write-code.dto';
import { writeCode, WriteDocument } from './schema/WritecodeSchema';


@Injectable()
export class WriteCodeService {


  create(createWriteCodeDto: CreateWriteCodeDto) {
    return 'This action adds a new writeCode';
  }

  findAll() {
    return `This action returns all writeCode`;
  }

  findOne(id: number) {
    return `This action returns a #${id} writeCode`;
  }

  update(id: number, updateWriteCodeDto: UpdateWriteCodeDto) {
    return `This action updates a #${id} writeCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} writeCode`;
  }
}
