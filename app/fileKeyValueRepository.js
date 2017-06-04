class FileKeyValueRepository {
  constructor(fileName){
    this.fileName = fileName;
    this.list = new Array();
  }

  add(keyValue){
    this.list.push(keyValue);
  }

  getAll(){
    return this.list;
  }
}

module.exports = FileKeyValueRepository
