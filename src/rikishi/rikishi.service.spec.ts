import { Test, TestingModule } from '@nestjs/testing';
import { RikishiService } from './rikishi.service';

describe('RikishiService', () => {
  let service: RikishiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RikishiService],
    }).compile();

    service = module.get<RikishiService>(RikishiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
