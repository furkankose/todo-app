import axios from 'axios';

export class ApiService {
  constructor(private module: string, private baseUrl = process.env.API_URL) {
    this.module = module;
    axios.defaults.baseURL = baseUrl;
  }

  async create(todo: Todo): Promise<Todo> {
    const response = await axios.post(`/${this.module}`, todo);
    return response.data;
  }

  async getAll(): Promise<Todo[]> {
    const response = await axios.get(`/${this.module}`);
    return response.data;
  }

  async get(id: string): Promise<Todo[]> {
    const response = await axios.get(`/${this.module}/${id}`);
    return response.data;
  }

  async update(id: string, todo: Todo): Promise<Todo> {
    const response = await axios.patch(`/${this.module}/${id}`, todo);
    return response.data;
  }

  async remove(id: string): Promise<Todo> {
    const response = await axios.delete(`/${this.module}/${id}`);
    return response.data;
  }
}
