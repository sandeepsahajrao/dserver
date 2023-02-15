import { PartialType } from '@nestjs/mapped-types';
import { CreateGetdbDto } from './create-getdb.dto';

export class UpdateGetdbDto extends PartialType(CreateGetdbDto) {}
