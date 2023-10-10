import { Controller, Get, Param, Body, Post, Query } from '@nestjs/common';
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

  @Post('add-task')
  async addTask(
    @Query('idList') listId: string,
    @Query('name') name: string,
    @Query('desc') desc: string,
  ) {
    try {
      // Call the TrelloService method to add the task
      const newTask = await this.trelloService.addTask(listId, name, desc);

      // Return the newly created task
      return { task: newTask };
    } catch (error) {
      return { error: error.message };
    }
  }
}
