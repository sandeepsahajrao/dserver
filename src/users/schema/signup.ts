import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsString, MaxLength, MinLength, IsEmpty } from 'class-validator';



export type SignupDocument = Signup & Document;

@Schema()
export class Signup {
  @IsEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(40)
  @Prop({ required: true })
  FirstName: string;

  @IsEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(40)
  @Prop({ required: true })
  LastName: string;

  @IsEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(32)
  @Prop({ required: true, unique: true })
  UserName: string;

  @IsEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(100)
  @Prop({ required: true, unique: true })
  Email: string;

  @IsEmpty()
  @MinLength(5)
  @MaxLength(32)
  @Prop({ required: true })
  Password: string;
}

export const SignupSchema = SchemaFactory.createForClass(Signup);
