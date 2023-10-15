// Create an empty buffer with a specific encoding
const stringBuffer = Buffer.alloc(10, 'utf8'); // You can specify the size and encoding

// Append strings to the buffer
const appendString = 'Hello, hi';
const appendString2 = 'World!';
stringBuffer.write(appendString, 0, appendString.length, 'utf8');
stringBuffer.write(appendString2, appendString.length, appendString2.length, 'utf8');

// Convert the buffer back to a string
const finalString = stringBuffer.toString('utf8', 0, appendString.length + appendString2.length);

console.log(finalString); // Output: "Hello, World!"
