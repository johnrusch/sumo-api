import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RikishiModule } from './rikishi/rikishi.module';

@Module({
  imports: [RikishiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
