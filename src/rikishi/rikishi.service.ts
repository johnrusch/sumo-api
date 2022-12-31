import { Injectable } from '@nestjs/common';
import { CreateRikishiDto } from './dto/create-rikishi.dto';
import { UpdateRikishiDto } from './dto/update-rikishi.dto';

@Injectable()
export class RikishiService {
  create(createRikishiDto: CreateRikishiDto) {
    return 'This action adds a new rikishi';
  }

  findAll() {
    return `This action returns all rikishi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rikishi`;
  }

  update(id: number, updateRikishiDto: UpdateRikishiDto) {
    return `This action updates a #${id} rikishi`;
  }

  remove(id: number) {
    return `This action removes a #${id} rikishi`;
  }
}
