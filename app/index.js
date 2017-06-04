const KeyValue = require('./keyValue')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter a command: ', (command) => {

  var keyVal1 = new KeyValue('key1', 'value1')
  console.log(`Thank you for your input: ${command}`);
  console.log('key val test: ' + JSON.stringify(keyVal1));

  rl.close();
});
