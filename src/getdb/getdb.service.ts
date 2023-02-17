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

  async findAll_master_child(): Promise<any[]> {
    const [rows] = await this.connection.query(
      'SELECT * FROM task_master_child',
    );

    const tasks1 = (rows as { [key: string]: any }[]).map((row) => {
      return {
        id: row.id,
        taskMasterId: row.task_master_id,
        taskCode: row.task_code,
        language: row.language,
        isActive: row.is_active,
      };
    });

    return tasks1;
  }

  // second api
  async findAll_task_master(): Promise<any[]> {
    const [rows] = await this.connection.query('SELECT * FROM task_master');

    const tasks2 = (rows as { [key: string]: any }[]).map((row) => {
      return {
        id: row.id,
        task_name: row.task_name,
        task_defination: row.task_defination,
        task_for: row.task_for,
        task_type: row.task_type,
        is_active: row.is_active,
        is_public: row.is_public,
      };
    });

    return tasks2;
  }

  // third api
  async findAll_test_case_inputs(): Promise<any[]> {
    const [rows] = await this.connection.query(
      'SELECT * FROM test_case_inputs',
    );

    const tasks3 = (rows as { [key: string]: any }[]).map((row) => {
      return {
        id: row.id,
        test_master_id: row.test_master_id,
        input: row.input,
        output: row.output,
      };
    });

    return tasks3;
  }

  // forth api
  async findAll_test_case_master(): Promise<any[]> {
    const [rows] = await this.connection.query(
      'SELECT * FROM test_case_master',
    );

    const tasks4 = (rows as { [key: string]: any }[]).map((row) => {
      return {
        id: row.id,
        task_id: row.task_id,
        input_text: row.input_text,
        language: row.language,
      };
    });

    return tasks4;
  }



  // fifth api
  async findAll_submitted_tasks(): Promise<any[]> {
    const [rows] = await this.connection.query(
      'SELECT * FROM submitted_tasks',
    );

    const tasks5 = (rows as { [key: string]: any }[]).map((row) => {
      return {
        id: row.id,
        task_id	: row.  task_id	,
        code: row.code,
        language: row.language,
        test_passed:row.test_passed,
        created_at:row.created_at
      };
    });

    return tasks5;
  }


  // sixth api
async findAll_all_Task(id: number | string): Promise<any[]> {
  const query = 'SELECT * FROM task_master WHERE id = ?';
  console.log(query, id);

  const [rows] = await this.connection.query(query, [id]);

  const tasks6 = (rows as { [key: string]: any }[]).map((row) => {
    return {
      id: row.id,
      task_name: row.task_name,
      task_defination: row.task_defination,
      task_for: row.task_for,
      task_type: row.task_type,
      is_active: row.is_active,
      is_public: row.is_public,
    };
  });

  return tasks6;
}

// api with id with code definition
async findAll_all_Task_id(id: number | string): Promise<any[]> {
  const query = 'SELECT * FROM `task_master_child` WHERE task_master_id=?';
  console.log(query, id);

  const [rows] = await this.connection.query(query, [id]);

  const tasks7 = (rows as { [key: string]: any }[]).map((row) => {
    return {
        id: row.id,
        taskMasterId: row.task_master_id,
        taskCode: row.task_code,
        language: row.language,
        isActive: row.is_active,
    };
  });

  return tasks7;

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
