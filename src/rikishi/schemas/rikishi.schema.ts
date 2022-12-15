import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RikishiDocument = HydratedDocument<Rikishi>;

@Schema()
export class Rikishi {
  @Prop()
  shikona: string;

  @Prop()
  highestRank: string;

  @Prop()
  currentRank: string;

  @Prop()
  heya: string;

  @Prop()
  height: number;

  @Prop()
  weight: number;

  @Prop()
  birthdate: Date;

  @Prop()
  yusho: number;

  @Prop()
  shukunSho: number;

  @Prop()
  kinboshi: number;

  @Prop()
  kantoSho: number;

  @Prop()
  ginoSho: number;

  @Prop()
  imageUrl: string;
}

export const RikishiSchema = SchemaFactory.createForClass(Rikishi);
