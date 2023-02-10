import { Prop } from '@nestjs/mongoose';
import { IsString, IsEmpty } from 'class-validator';

export class CreateWriteCodeDto {
    @IsEmpty()
    @IsString()
    @Prop({ required: true })
    writecode: string;
  
    @IsEmpty()
    @IsString()
    @Prop({ required: true })
    language: string;
}
