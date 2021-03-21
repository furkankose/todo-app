import { AxiosInstance } from 'axios';
import axios from './axios';
import { Todo } from '../todo';

export class ApiService {
  private module: string;
  private axios: AxiosInstance;

  constructor(module: string, baseUrl = process.env.VUE_APP_BASE_API_URL) {
    this.module = module;
    this.axios = axios(baseUrl);
  }

  async create(todo: Todo): Promise<Todo> {
    const response = await this.axios.post(`/${this.module}`, todo);
    return response.data;
  }

  async getAll(): Promise<Todo[]> {
    const response = await this.axios.get(`/${this.module}`);
    return response.data;
  }

  async get(id: string): Promise<Todo[]> {
    const response = await this.axios.get(`/${this.module}/${id}`);
    return response.data;
  }

  async update(id: string, todo: Todo): Promise<Todo> {
    const response = await this.axios.patch(`/${this.module}/${id}`, todo);
    return response.data;
  }

  async remove(id: string): Promise<Todo> {
    const response = await this.axios.delete(`/${this.module}/${id}`);
    return response.data;
  }
}
