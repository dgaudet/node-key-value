class FileKeyValueRepository {
  constructor(fileName){
    this.fileName = fileName;
    this.list = new Array();
  }

  add(keyValue){
    var existingKeyVal = this.get(keyValue.key);
    if (existingKeyVal != null) {
      existingKeyVal.value = keyValue.value;
    } else {
      this.list.push(keyValue);
    }
  }

  get(key){
    var result = this.list.filter(function(keyValue){
      return keyValue.key === key;
    });

    if (result.length > 0) {
      return result[0];
    }
    return null;
  }

  getAll(){
    return this.list;
  }
}

module.exports = FileKeyValueRepository
