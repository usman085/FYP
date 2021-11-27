import instance from './axiosConfig';
// import { generateUID } from '../helper/helper';

function token() {
    if (localStorage.getItem('auth_user')) {
        let data = localStorage.getItem('auth_user');
        let parseData = JSON.parse(data);
        return parseData.token;
    }
    return null;

}
export async function login({ email, password }) {
    return await instance.post('/auth/login', { email, password });
}
export async function register({ name, email, password, role_id }) {
    return await instance.post('/auth/register', { name, email, password, role_id });
}
export async function roles() {
    return await instance.get('/auth/roles');
}
export async function getDoc() {
    return await instance.get('/doctors');
}
export async function createApp(data) {
    return await instance.post('/appointment', data);
}
export async function getAppointment(id) {
    return await instance.get(`/appointment/${id}`);
}
export async function getPatients(id) {
    return await instance.get(`/appointment/${id}`);
}
