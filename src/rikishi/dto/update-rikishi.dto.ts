import { PartialType } from '@nestjs/mapped-types';
import { CreateRikishiDto } from './create-rikishi.dto';

export class UpdateRikishiDto extends PartialType(CreateRikishiDto) {
    id: number;
    shikona: string;
    highestRank: number;
    currentRank: string;
    heya: string;
    height: number;
    weight: number;
    birthdate: Date;
    yusho: number;
    shukunSho: number;
    kinboshi: number;
    kantoSho: number;
    ginoSho: number;
}
