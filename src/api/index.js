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
export const getTempValues = () => API.get('temp/getTempReadings', config);
export const getStatus = () =>
  API.get('devices/getDeviceById/6472d6332133a2af8e811236', config);
export const getStatus2 = () =>
  API.get('devices/getDeviceById/6472d6422133a2af8e811239', config);

export const updateStatus = body =>
  API.put('devices/changeStatus/6472d6332133a2af8e811236', body, config);
export const updateStatus2 = body =>
  API.put('devices/changeStatus/6472d6422133a2af8e811239', body, config);
export const getCurrentWeather =  () =>
  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=33.6058&lon=73.0437&appid=b568399cc80e724faa845eb257c9f363`);
  export const forgotPassord = authFormData =>
  API.post('forgetPassword/userForgetPassword', authFormData, config);