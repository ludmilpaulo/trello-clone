import { Controller, Get, Param } from '@nestjs/common';
import { TrelloService } from './trello.service';

@Controller('trello')
export class TrelloController {
  constructor(private readonly trelloService: TrelloService) {}

  @Get('boards')
  async getBoards() {
    try {
      const boards = await this.trelloService.getBoards();
      return { boards };
    } catch (error) {
      return { error: error.message };
    }
  }

  @Get('tasks/:boardId')
  async getTasks(@Param('boardId') boardId: string) {
    try {
      const tasks = await this.trelloService.getTasks(boardId);
      return { tasks };
    } catch (error) {
      return { error: error.message };
    }
  }
}
