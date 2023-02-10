import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WriteCodeService } from './write-code.service';
import { CreateWriteCodeDto } from './dto/create-write-code.dto';
import { UpdateWriteCodeDto } from './dto/update-write-code.dto';

@Controller('write-code')
export class WriteCodeController {
  constructor(private readonly writeCodeService: WriteCodeService) {}

  @Post()
  create(@Body() createWriteCodeDto: CreateWriteCodeDto) {
    return this.writeCodeService.create(createWriteCodeDto);
  }

  @Get()
  findAll() {
    return this.writeCodeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.writeCodeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWriteCodeDto: UpdateWriteCodeDto) {
    return this.writeCodeService.update(+id, updateWriteCodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.writeCodeService.remove(+id);
  }
}
