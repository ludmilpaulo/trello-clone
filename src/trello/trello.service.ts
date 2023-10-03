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

  // Fetch Trello boards
  async getBoards() {
    try {
      // Make a GET request to Trello API to get boards
      const response = await axios.get(
        `https://api.trello.com/1/members/me/boards?key=${this.apiKey}&token=${this.apiToken}`,
      );

      // Return the data received from the Trello API
      return response.data;
    } catch (error) {
      // Handle errors, log, 
      throw error;
    }
  }

  // Fetch tasks for a specific board
  async getTasks(boardId: string) {
    try {
      // Make a GET request to Trello API to get tasks for the specified board
      const response = await axios.get(
        `https://api.trello.com/1/boards/${boardId}/cards?key=${this.apiKey}&token=${this.apiToken}`,
      );

      // Return the data received from the Trello API
      return response.data;
    } catch (error) {
      // Handle errors
      throw error;
    }
  }
}
