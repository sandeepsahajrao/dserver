import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
  Req,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SignupSchema } from './schema/signup';


@Controller('users')
export class UsersController {
  authService: any;
  constructor(private readonly usersService: UsersService) {}
  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createUserDto: CreateUserDto) {
    // console.log(createUserDto)
    
    return this.usersService.create(createUserDto);
  }
  
  @Get('/allusers')
  findAll() {
    return this.usersService.findAll();
  }


  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() body) {
    const user = await this.usersService.validateUser(body.Email, body.Password);
   
    if (!user) {
      return { status: HttpStatus.UNAUTHORIZED, message: 'Invalid credentials' };
    }
    return { status: HttpStatus.OK, message: 'Login successful', user };
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
