class KeyValue {
  constructor(key, value){
    this.key = key;
    this.value = value;
  }

  print(){
    return `Key: ${this.key} Value: ${this.value}`;
  }
}

module.exports = KeyValue;
