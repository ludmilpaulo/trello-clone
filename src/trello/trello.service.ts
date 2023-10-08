import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TrelloService {
  private readonly apiKey: string;
  private readonly apiToken: string;

  constructor() {
    this.apiKey = process.env.TRELLO_API_KEY;
    this.apiToken = process.env.TRELLO_API_TOKEN;
  }

  async getBoards() {
    try {
      const response = await axios.get(
        `https://api.trello.com/1/members/me/boards?key=${this.apiKey}&token=${this.apiToken}`,
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getTasks(boardId: string) {
    try {
      const response = await axios.get(
        `https://api.trello.com/1/boards/${boardId}/lists?key=${this.apiKey}&token=${this.apiToken}`,
      );

      console.log('response', response.data);

      return response.data;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw error;
    }
  }
}
