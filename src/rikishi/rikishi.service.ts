import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRikishiDto } from './dto/create-rikishi.dto';
import { UpdateRikishiDto } from './dto/update-rikishi.dto';
import { Rikishi } from './schemas/rikishi.schema';

@Injectable()
export class RikishiService {

  constructor(@InjectModel(Rikishi.name) private rikishiModel: Model<Rikishi>) {}

  create(createRikishiDto: CreateRikishiDto): Promise<Rikishi> {
    if (typeof createRikishiDto.birthdate === 'string') {
      createRikishiDto.birthdate = new Date(createRikishiDto.birthdate);
    };
    const createdRikishi = this.rikishiModel.create(createRikishiDto);
    return createdRikishi;
  }

  createMany(createRikishiDto: CreateRikishiDto[]): Promise<Rikishi[]> {
    for (const rikishi of createRikishiDto) {
      if (typeof rikishi.birthdate === 'string') {
        rikishi.birthdate = new Date(rikishi.birthdate);
      };
    };
    const createdRikishi = this.rikishiModel.insertMany(createRikishiDto);
    return createdRikishi;
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
