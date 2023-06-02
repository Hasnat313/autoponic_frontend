import {io} from 'socket.io-client';
const socket = io('http://192.168.100.22:3000');
export default socket;
