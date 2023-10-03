import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { TrelloController } from './trello.controller';
import { TrelloService } from './trello.service';

@Module({
  imports: [HttpModule],
  controllers: [TrelloController],
  providers: [TrelloService],
  exports: [TrelloService],
})
export class TrelloModule {}
