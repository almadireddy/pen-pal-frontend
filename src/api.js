import openSocket from 'socket.io-client';
const socket = openSocket('https://secure-badlands-41304.herokuapp.com');

function connect(cb) {
  // listen for any messages coming through
  // of type 'chat' and then trigger the 
  // callback function with said message
  socket.on('scooby', (message) => {
    cb(message);
  })
}

function send(message) {
  console.log(message)
  socket.emit('shaggy', message);
}

export {
  connect,
  send
}