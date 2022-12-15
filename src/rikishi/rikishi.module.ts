import { Module } from '@nestjs/common';
import { RikishiService } from './rikishi.service';
import { RikishiController } from './rikishi.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Rikishi, RikishiSchema } from './schemas/rikishi.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Rikishi.name, schema: RikishiSchema }])],
  controllers: [RikishiController],
  providers: [RikishiService]
})
export class RikishiModule {}
