import openSocket from 'socket.io-client';
const socket = openSocket('https://secure-badlands-41304.herokuapp.com');

function connect(messageCallback, connectCallback, daphneCallback) {
  // listen for any messages coming through
  // of type 'chat' and then trigger the 
  // callback function with said message
  socket.on('scooby', (message) => {
    messageCallback(message);
  });

  socket.on('velma', (message) => {
    connectCallback(message);
  });
  
  socket.on('daphne', (message) => {
    daphneCallback(message);
  })
}

function send(message, type='shaggy') {
  console.log(message)
  socket.emit(type, message);
}

export {
  connect,
  send
}