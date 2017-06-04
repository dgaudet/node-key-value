class StoreController {
  constructor(keyValueStore){
    this.store = keyValueStore;
    this.defaultErrorMessage = 'Please enter a store command.';
  }

  readLine(data){
    if(data != null && data.length > 0){
      var commands = data.split(' ');
      if (commands.length < 2 || commands[0].toLowerCase() !== 'store') {
        console.log(this.defaultErrorMessage);
      } else {
        switch (commands[1].toLowerCase()){
          case 'add':
            break;
          default:
            console.log(this.defaultErrorMessage);
        }
      }
    }
  }
}

module.exports = StoreController
