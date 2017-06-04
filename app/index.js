const KeyValue = require('./keyValue')
const KeyValueStore = require('./keyValueStore')
const FileRepo = require('./fileKeyValueRepository')

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var fileRepo = new FileRepo('');
var keyValueStore = new KeyValueStore(fileRepo);

rl.question('Please enter a command: ', (command) => {

  var keyVal1 = new KeyValue('key1', 'value1');
  keyValueStore.add(keyVal1);
  keyValueStore.add(new KeyValue('key2', 'value2'));
  keyValueStore.add(new KeyValue('key3', 'value3'));
  keyValueStore.add(new KeyValue('key1', 'value4'));
  var allKeyVals = keyValueStore.getAll();

  console.log(`Thank you for your input: ${command}`);
  allKeyVals.forEach(function(keyVal){
      console.log(JSON.stringify(keyVal));
  });

  var retrieved = keyValueStore.get('key1');
  console.log(JSON.stringify(retrieved));


  rl.close();
});
