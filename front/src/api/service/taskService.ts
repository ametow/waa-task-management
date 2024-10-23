import http from '../axios'

export const fetchTasks = () => {
    return http.get('/tasks');
}

export const authAction = (action: string, payload:any) => {
    let url= action === 'Login' ? '/auth/login' : '/auth/register';
    return http.post(url, payload);
}
