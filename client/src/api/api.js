import instance from './axiosConfig';
import { generateUID } from '../helper/helper';

function token() {
    if (localStorage.getItem('auth_user')) {
        let data = localStorage.getItem('auth_user');
        let parseData = JSON.parse(data);
        return parseData.token;
    }
    return null;

}

export async function login() {
    return await instance.get('/auth/login');
}