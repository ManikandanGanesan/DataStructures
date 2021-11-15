import { Test, TestingModule } from '@nestjs/testing';
import { BfsService } from './bfs.service';

describe('BfsService', () => {
  let service: BfsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BfsService],
    }).compile();

    service = module.get<BfsService>(BfsService);
  });

  it('print the graph', () => {
    service.main();
    service.bfs(0);
  });
});
