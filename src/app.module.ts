import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RikishiModule } from './rikishi/rikishi.module';

@Module({
  imports: [RikishiModule, MongooseModule.forRoot('mongodb+srv://quorbleadmin:quorbleadmin@sumoapi.2fc2h.mongodb.net/GrandSumo?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
