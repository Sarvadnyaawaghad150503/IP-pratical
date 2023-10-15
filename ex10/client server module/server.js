const net = require('net');

const server = net.createServer((socket) => {
  // A new client has connected.
  console.log('Client connected');

  // Handle data received from the client.
  socket.on('data', (data) => {
    console.log(`Received: ${data.toString()}`);
    
    // Send a response back to the client.
    socket.write('Hello from the server!\r\n');
  });

  // Handle client disconnect.
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

const PORT = 3000;

server.listen(PORT, ()  => {
  console.log(`Server is listening on port ${PORT}`);
});
