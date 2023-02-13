import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Signup, SignupDocument } from './schema/signup';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Signup.name) private SignModel: Model<SignupDocument>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<Signup> {
    const model = new this.SignModel();
    model.FirstName = createUserDto.FirstName;
    model.LastName = createUserDto.LastName;
    model.UserName = createUserDto.UserName;
    model.Email = createUserDto.Email;
    model.Password = createUserDto.Password;
    if (
      model.UserName === createUserDto.UserName ||
      model.Email === createUserDto.Email
    ) {
      console.log('user already exit');
      return;
    }
    return model.save();
  }

  async validateUser(Email: string, Password: string): Promise<Signup> {
    const loginusers = await this.SignModel.findOne({Email,Password});
    // console.log(Email,Password)
    if (loginusers.Email && loginusers.Password === Password) {
      return loginusers;
    }
    return null;
  }

  findAll(): Promise<Signup[]> {
    return this.SignModel.find().exec();
  }

  findOne(id: string): Promise<Signup> {
    return this.SignModel.findById(id).exec();
  }

  // findUserByEmail(UserName: string): Promise<Signup> {
  //   return this.SignModel.findOne(id).exec();
  // }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.SignModel.updateOne(
      { _id: id },
      {
        FirstName: updateUserDto.FirstName,
        LastName: updateUserDto.LastName,
        Email: updateUserDto.Email,
        Password: updateUserDto.Password,
      },
    ).exec();
  }

  remove(id: string) {
    return this.SignModel.deleteOne({ _id: id }).exec();
  }
}
