import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { RikishiService } from './rikishi.service';
import { Rikishi } from './schemas/rikishi.schema';

describe('RikishiService', () => {
  let service: RikishiService;
  let model: Model<Rikishi>;

  const mockRikishiModel = {
    new: jest.fn(),
    constructor: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    findById: jest.fn(),
    create: jest.fn(),
    insertMany: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
    exists: jest.fn(),
  };

  const rikishi = {
    shikona: 'terunofuji',
    highestRank: 'Y',
    currentRank: 'Y',
    heya: 'isegahama',
    height: 192,
    weight: 181,
    birthdate: new Date('11/29/1991'),
    yusho: 7,
    shukunSho: 3,
    kinboshi: null,
    kantoSho: 3,
    ginoSho: 3,
    imageUrl: 'http://sumo.or.jp/img/sumo_data/rikishi/60x60/20110008.jpg',
  };

  const manyRikishi = [
    {
      shikona: 'terunofuji',
      highestRank: 'Y',
      currentRank: 'Y',
      heya: 'isegahama',
      height: 192,
      weight: 181,
      birthdate: new Date('11/29/1991'),
      yusho: 7,
      shukunSho: 3,
      kinboshi: null,
      kantoSho: 3,
      ginoSho: 3,
      imageUrl: 'http://sumo.or.jp/img/sumo_data/rikishi/60x60/20110008.jpg',
    },
    {
      shikona: 'hakuho',
      highestRank: 'Y',
      currentRank: 'Y',
      heya: 'hakuhodai',
      height: 192,
      weight: 181,
      birthdate: new Date('11/29/1991'),
      yusho: 7,
      shukunSho: 3,
      kinboshi: null,
      kantoSho: 3,
      ginoSho: 3,
      imageUrl: 'http://sumo.or.jp/img/sumo_data/rikishi/60x60/20110008.jpg',
    },
  ];
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RikishiService,
        {
          provide: getModelToken(Rikishi.name),
          useValue: mockRikishiModel,
        },
      ],
    }).compile();

    service = module.get<RikishiService>(RikishiService);
    model = module.get<Model<Rikishi>>(getModelToken(Rikishi.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new rikishi', async () => {
    jest.spyOn(model, 'create').mockImplementationOnce(() => rikishi as any);
    expect(await service.create(rikishi)).toEqual(rikishi);
  });

  it('should create many rikishi', async () => {
    jest
      .spyOn(model, 'insertMany')
      .mockImplementationOnce(() => [rikishi] as any);
    expect(await service.createMany([rikishi])).toEqual([rikishi]);
  });
});
