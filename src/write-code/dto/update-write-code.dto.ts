import { PartialType } from '@nestjs/mapped-types';
import { CreateWriteCodeDto } from './create-write-code.dto';

export class UpdateWriteCodeDto extends PartialType(CreateWriteCodeDto) {}
