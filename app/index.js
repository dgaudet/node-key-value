const KeyValueStore = require('./keyValueStore')
const MemoryRepo = require('./memoryKeyValueRepository')
const StoreController = require('./storeController')
const Readline = require('readline')
const AppInfo = require('./appInfo')

const rl = Readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var memoryRepo = new MemoryRepo('');
var keyValueStore = new KeyValueStore(memoryRepo);
var storeController = new StoreController(keyValueStore);

rl.on('line', (input) => {
  if (input.toLowerCase() === 'exit') {
    rl.close();
  } else {
    storeController.readLine(input);
  }
});

var appInfo =  new AppInfo();
appInfo.displayAppInfo();
