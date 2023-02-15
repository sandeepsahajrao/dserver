import { Inject, Injectable } from '@nestjs/common';
import { CreateGetdbDto } from './dto/create-getdb.dto';
import { UpdateGetdbDto } from './dto/update-getdb.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Getdb } from './entities/getdb.entity';

import { Connection } from 'mysql2/promise';

@Injectable()
export class GetdbService {
  constructor(
    @Inject('MYSQL_CONNECTION')
    private connection: Connection,
  ) {}
  
  create(createGetdbDto: CreateGetdbDto) {
    return 'This action adds a new getdb';
  }

  // findAll() {
  //   return `This action returns all getdb`;
  // }

  async getItems(): Promise<any> {
    const [rows] = await this.connection.query('SELECT * FROM items');
    return rows;
  }

  findOne(id: number) {
    return `This action returns a #${id} getdb`;
  }

  update(id: number, updateGetdbDto: UpdateGetdbDto) {
    return `This action updates a #${id} getdb`;
  }

  remove(id: number) {
    return `This action removes a #${id} getdb`;
  }
}
