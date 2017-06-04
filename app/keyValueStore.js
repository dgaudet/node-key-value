class KeyValueStore {
  constructor(repository){
    this.repo = repository;
  }

  add(keyValue){
    // todo: check if the key already exsists to do an update
    this.repo.add(keyValue);
  }

  getAll(){
    return this.repo.getAll();
  }
}

module.exports = KeyValueStore
