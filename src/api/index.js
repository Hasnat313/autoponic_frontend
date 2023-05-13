import axios from 'axios';
/*eslint-disable*/

// import BASE_URL from "BASE_URL";
import {BASE_URL} from './BASE_URL';

const API = axios.create({
  baseURL: BASE_URL,
});
const config = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export const register = authFormData =>
  API.post('user/register', authFormData, config);
export const login = authFormData =>
  API.post('user/login', authFormData, config);
