import { PartialType } from '@nestjs/mapped-types';
import { CreateRikishiDto } from './create-rikishi.dto';

export class UpdateRikishiDto extends PartialType(CreateRikishiDto) {}
