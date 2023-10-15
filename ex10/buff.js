const fs = require('fs');

// Creating a readable stream to read data from a file
const readStream = fs.createReadStream('input.txt', 'utf8');

// Creating a writable stream to write data to a file
const writeStream = fs.createWriteStream('output.txt');

// Creating an empty buffer
let buffer = Buffer.from('');

// Listening for 'data' event on the readable stream
readStream.on('data', (chunk) => {
  console.log('Reading chunk of data...');
  
  // Appending the data chunk to the buffer
  buffer = Buffer.concat([buffer, Buffer.from(chunk)]);
});

// Listening for 'end' event on the readable stream
readStream.on('end', () => {
  console.log('Read entire file.');

  // Now you can work with the complete buffer
  console.log('Buffer content:');
  console.log(buffer.toString());
  
  // Write the buffer content to the output file
  writeStream.write(buffer, (err) => {
    if (err) {
      console.error('Error writing to output file:', err);
    }
  });
});

readStream.on('error', (err) => {
  console.error('Error reading from input file:', err);
});

writeStream.on('finish', () => {
  console.log('Write operation finished.');
});

