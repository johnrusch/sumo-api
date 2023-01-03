import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRikishiDto } from './dto/create-rikishi.dto';
import { UpdateRikishiDto } from './dto/update-rikishi.dto';
import { Rikishi } from './schemas/rikishi.schema';

@Injectable()
export class RikishiService {
  constructor(
    @InjectModel(Rikishi.name) private rikishiModel: Model<Rikishi>,
  ) {}

  async create(createRikishiDto: CreateRikishiDto): Promise<Rikishi> {
    if (typeof createRikishiDto.birthdate === 'string') {
      createRikishiDto.birthdate = new Date(createRikishiDto.birthdate);
    }
    const createdRikishi = await this.rikishiModel.create(createRikishiDto);
    return createdRikishi;
  }

  async createMany(createRikishiDto: CreateRikishiDto[]): Promise<Rikishi[]> {
    for (const rikishi of createRikishiDto) {
      if (typeof rikishi.birthdate === 'string') {
        rikishi.birthdate = new Date(rikishi.birthdate);
      }
    }
    const createdRikishi = await this.rikishiModel.insertMany(createRikishiDto);
    return createdRikishi;
  }

  async findAll() {
    return await this.rikishiModel.find().exec();
  }

  async findOne(shikona: string) {
    return await this.rikishiModel.findOne({ shikona }).exec((err, rikishi) => {
      if (err) {
        return err;
      } else {
        return rikishi;
      }
    });
  }

  async update(id: string, updateRikishiDto: UpdateRikishiDto) {
    return await this.rikishiModel.findOneAndUpdate({ id: +id }, updateRikishiDto);
  }

  async deleteOne(id: string) {
    return await this.rikishiModel.deleteOne({ id: +id });
  }
}