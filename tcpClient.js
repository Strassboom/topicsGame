const net = require('net');
const port = 1337
const fs = require('fs')

function getFileLineCount(){
  const val = fs.readFileSync('fileData.txt', 'utf8')
  return val.split('\n').length;
}

const client = new net.Socket();
client.connect(port, '127.0.0.1', function() {
	console.log('Connected');
	console.log(client.write(`[{"Hello": "World","lineCount":${getFileLineCount()}}]`));
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	//client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});

console.log(getFileLineCount());