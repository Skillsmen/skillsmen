import io from 'socket.io-client/dist/socket.io';

import Actions from '../actions/index';

let socket = null;

export function socketMiddleware(store) {
  return next => (action) => {
  console.log('stuff is going through the sockets!');
    const result = next(action);

    if (socket && action.type === Actions.ADD_MESSAGE) {
      const messages = store.getState().messages;
      socket.emit('message', messages[messages.length - 1]);
    }
    return result;
  };
}

export default function (store) {
  socket = io.connect('http://localhost:3000', { transports: ['websocket'] });

  socket.on('message', (data) => {
    store.dispatch(Actions.addResponse(data));
  });
}

 // Right now, just using local host for testing... switch to ${settings.SERVER}/
    // this.socket = io('http://localhost:3000', { transports: ['websocket'] });
    // can use socket throughout this module by referencing this.socket.io
