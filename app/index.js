const KeyValueStore = require('./keyValueStore')
const FileRepo = require('./fileKeyValueRepository')
const StoreController = require('./storeController')

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('You can continue to enter commands. \'exit\' or ctrl+c will quit the application.')

var fileRepo = new FileRepo('');
var keyValueStore = new KeyValueStore(fileRepo);
var storeController = new StoreController(keyValueStore);

rl.on('line', (input) => {
  if (input.toLowerCase() === 'exit') {
    rl.close();
  } else {
    storeController.readLine(input);
  }
});
