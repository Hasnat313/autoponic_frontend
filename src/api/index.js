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
// API.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response) {
//       console.log('API Error:', error.response.data);
//     } else {
//       console.dir('API Error:', error.message);
//     }
//     return Promise.reject(error);
//   },
// );
export const register = async (authFormData) => {
  try {
    console.log("this is data", authFormData);
    console.log(BASE_URL);
    const response = await fetch(
      'https://autoponic.softwisesol.com/user/getAllUsers',
    );
    const json = await response.json();
    console.log(json)
  } catch (error) {
    console.error('API Error:', error.message);
    throw error;
  }
};
// export const login = authFormData =>
// API.post('user/login', authFormData, config);
// export const getStatus = () =>
//   API.get('devices/getDeviceById/6472d6332133a2af8e811236', config);
// export const getStatus2 = () =>
//   API.get('devices/getDeviceById/6472d6422133a2af8e811239', config);

// export const updateStatus = body =>
//   API.put('devices/changeStatus/6472d6332133a2af8e811236', body, config);
// export const updateStatus2 = body =>
//   API.put('devices/changeStatus/6472d6422133a2af8e811239', body, config);
