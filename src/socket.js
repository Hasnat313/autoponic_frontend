import {io} from 'socket.io-client';
import {BASE_URL} from './api/BASE_URL';
const socket = io(BASE_URL);
export default socket;
