const KeyValue = require('./keyValue')

class StoreController {
  constructor(keyValueStore){
    this.store = keyValueStore;
    this.defaultErrorMessage = 'Please enter a store command.';
  }

  readLine(data){
    try {
      if(data != null && data.length > 0){
        var commands = data.split(' ');
        if (commands.length < 2 || commands[0].toLowerCase() !== 'store') {
          console.log(this.defaultErrorMessage);
        } else {
          switch (commands[1].toLowerCase()){
            case 'add':
              this.handleAdd(commands);
              break;
            case 'list':
              this.handleList();
              break;
            case 'get':
              this.handleGet(commands);
              break;
            case 'remove':
              this.handleRemove(commands);
              break;
            default:
              console.log(this.defaultErrorMessage);
          }
        }
      }
    } catch (e){
      console.log('Sorry something went terribly wrong.\nPlease try again or contact support at dean@deangaudet.com.')
    }
  }

  handleAdd(commands){
    if(commands.length > 3){
      var keyValue = new KeyValue(commands[2], commands[3]);
      this.store.add(keyValue);
      console.log('added');
    } else {
      console.log(this.defaultErrorMessage);
    }
  }

  handleList(){
    var allKeyVals = this.store.getAll();
    allKeyVals.forEach(function(keyVal){
        console.log(keyVal.print());
    });
  }

  handleGet(commands){
    if(commands.length > 2){
      var matchedKeyVal = this.store.get(commands[2]);
      if (matchedKeyVal != null) {
        console.log(matchedKeyVal.print());
      } else {
        console.log('Sorry there is no matching Key in the Store');
      }
    } else {
      console.log(this.defaultErrorMessage);
    }
  }

  handleRemove(commands){
    if(commands.length > 2){
      this.store.remove(commands[2]);
    } else {
      console.log(this.defaultErrorMessage);
    }
  }
}

module.exports = StoreController
