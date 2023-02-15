import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GetdbService } from './getdb.service';
import { CreateGetdbDto } from './dto/create-getdb.dto';
import { UpdateGetdbDto } from './dto/update-getdb.dto';


@Controller('getdb')
export class GetdbController {
  constructor(private readonly getdbService: GetdbService) {}

  @Post()
  create(@Body() createGetdbDto: CreateGetdbDto) {
    return this.getdbService.create(createGetdbDto);
  }

  @Get()
  async getItems(): Promise<any> {
    return this.getdbService.getItems();
  }

  // @Get()
  // findAll() {
  //   return this.getdbService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getdbService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGetdbDto: UpdateGetdbDto) {
    return this.getdbService.update(+id, updateGetdbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.getdbService.remove(+id);
  }
}
