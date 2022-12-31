import { Test, TestingModule } from '@nestjs/testing';
import { RikishiController } from './rikishi.controller';
import { RikishiService } from './rikishi.service';

describe('RikishiController', () => {
  let controller: RikishiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RikishiController],
      providers: [RikishiService],
    }).compile();

    controller = module.get<RikishiController>(RikishiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
