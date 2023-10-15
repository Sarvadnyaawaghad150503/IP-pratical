const net = require('net');

const client = new net.Socket();

const PORT = 3003;
const HOST = '127.0.0.1';  // Use IPv4 localhost

client.connect(PORT, HOST, () => {
  console.log('Connected to server');

  // Send data to the server.
  client.write('Hello, server!');
});

client.on('data', (data) => {
  console.log(`Received from server: ${data.toString()}`);
});

client.on('close', () => {
  console.log('Connection closed');
});
client.on('error', (err) => {
  console.error('Error:', err.message);
});
