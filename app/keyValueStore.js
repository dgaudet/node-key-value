class KeyValueStore {
  constructor(repository){
    this.repo = repository;
  }

  add(keyValue){
    this.repo.add(keyValue);
  }

  get(key){
    return this.repo.get(key);
  }

  getAll(){
    return this.repo.getAll();
  }

  remove(key){
    this.repo.remove(key);
  }
}

module.exports = KeyValueStore
