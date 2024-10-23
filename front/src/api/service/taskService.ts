import http from '../axios'
import {NewTask, Task} from "../../Task";

export const fetchTasks = () => {
    return http.get('/tasks');
}

export const authAction = (action: string, payload: any) => {
    let url = action === 'Login' ? '/auth/login' : '/auth/register';
    return http.post(url, payload);
}

export const getTasks = () => http.get('/tasks');
export const getTaskById = (id: number) => http.get(`/tasks/${id}`);
export const createTask = (task: NewTask) => http.post('/tasks', task);
export const updateTask = (id: number, task: Task) => http.put(`tasks/${id}`, task);
export const deleteTask = (id: number) => http.delete(`tasks/${id}`);
