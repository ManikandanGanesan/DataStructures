import { Test, TestingModule } from '@nestjs/testing';
import { ArraysService } from './arrays.service';

describe('ArraysService', () => {
  let service: ArraysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArraysService],
    }).compile();

    service = module.get<ArraysService>(ArraysService);
  });

  it('should be rotated according to k number of rotations', () => {
    const params = {
      inputArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      k: 11,
    };
    const result = service.left_rotation(params);
    expect(result).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 1]);
  });
});
