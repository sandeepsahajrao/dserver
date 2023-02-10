import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsString, MaxLength, MinLength, IsEmpty } from 'class-validator';



export type WriteDocument = writeCode & Document;

@Schema()
export class writeCode {
  @IsEmpty()
  @IsString()
  @Prop({ required: true })
  writecode: string;

  @IsEmpty()
  @IsString()
  @Prop({ required: true })
  language: string;
  
}

export const CodeSchema = SchemaFactory.createForClass(writeCode);
