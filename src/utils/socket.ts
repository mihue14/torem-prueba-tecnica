import { io } from 'socket.io-client';

export const socketClient = io('http://localhost:8080', {
  transports: ['websocket'],
  upgrade: false
});
