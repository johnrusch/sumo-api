import { Module } from '@nestjs/common';
import { RikishiService } from './rikishi.service';
import { RikishiController } from './rikishi.controller';

@Module({
  controllers: [RikishiController],
  providers: [RikishiService]
})
export class RikishiModule {}
