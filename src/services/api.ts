import axios from 'axios';
import { Task, CreateTaskRequest } from '../types/Task';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Add response interceptor to log all responses
api.interceptors.response.use(
  (response) => {
    console.log('API Response:', response.config.url, response.status, response.data);
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const taskService = {
  getAllTasks: async (): Promise<Task[]> => {
    const response = await api.get<Task[]>('/tasks');
    return response.data;
  },

  getTaskById: async (id: string): Promise<Task> => {
    const response = await api.get<Task>(`/tasks/${id}`);
    return response.data;
  },

  createTask: async (task: CreateTaskRequest): Promise<Task> => {
    console.log('Sending create task request:', task);
    const response = await api.post<Task>('/tasks', task);
    console.log('Create task response:', response.data);
    return response.data;
  },

  deleteTask: async (id: string): Promise<void> => {
    await api.delete(`/tasks/${id}`);
  },

  searchTasksByName: async (name: string): Promise<Task[]> => {
    const response = await api.get<Task[]>(`/tasks/search?name=${encodeURIComponent(name)}`);
    return response.data;
  },

  executeTask: async (id: string): Promise<Task> => {
    const response = await api.put<Task>(`/tasks/${id}/execute`);
    return response.data;
  },
};
