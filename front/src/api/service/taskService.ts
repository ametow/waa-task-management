import http from '../axios'
import {Task} from "../../Task";

export const fetchTasks = () => {
    return http.get('/tasks');
}

export const authAction = (action: string, payload: any) => {
    let url = action === 'Login' ? '/auth/login' : '/auth/register';
    return http.post(url, payload);
}
const API_URL = 'http://localhost:8080/tasks';

export const getTasks = () => http.get(API_URL);
export const getTaskById = (id: number) => http.get(`${API_URL}/${id}`);
export const createTask = (task: Task) => http.post(API_URL, task);
export const updateTask = (id: number, task: Task) => http.put(`${API_URL}/${id}`, task);
export const deleteTask = (id: number) => http.delete(`${API_URL}/${id}`);
