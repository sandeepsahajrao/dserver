import { Controller, Get, Param } from '@nestjs/common';
import { GetdbService } from './getdb.service';

@Controller('getdb')
export class GetdbController {
  constructor(private readonly getdbService: GetdbService) {}

  @Get('findAll_master_child')
  async getItems1(): Promise<any> {
    return this.getdbService.findAll_master_child();
  }


  // second Api
  @Get('findAll_task_master')
  async getItems2(): Promise<any> {
    return this.getdbService.findAll_task_master();
  }

  // third Api
  @Get('findAll_test_case_inputs')
  async getItems3(): Promise<any> {
    return this.getdbService.findAll_test_case_inputs();
  }

  // forth Api
  @Get('findAll_test_case_master')
  async getItems4(): Promise<any> {
    return this.getdbService.findAll_test_case_master();
  }
  // fifth Api
  @Get('findAll_submitted_tasks')
  async getItems5(): Promise<any> {
    return this.getdbService.findAll_submitted_tasks();
  }


  // this api for /task:id
   @Get('/task/:id')
  async getItems6(@Param() Param:Record<string,any>): Promise<any> {
    console.log(Param)
    return this.getdbService.findAll_all_Task(Param.id);
  }
  // this api for /task:id code definition
   @Get('/taskcode/:id')
  async getItems7(@Param() Param:Record<string,any>): Promise<any> {
    console.log(Param)
    return this.getdbService.findAll_all_Task_id(Param.id);
  }

  // @Get('/task/:id')
  // async getTask(@Param('id') id: number): Promise<any[]> {
  
  //   return await this.getdbService.findAll_all_Task(id);
  // }


}