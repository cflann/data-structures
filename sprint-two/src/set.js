var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = new HashTable();
  return set;
};

var setPrototype = {};
//O(1)
setPrototype.add = function(item){
  if (!this.contains(item)) {
    this._storage.insert(item, item);
  }
};
//O(1)
setPrototype.contains = function(item){
  return this._storage.retrieve(item) !== null;
};
//O(1)
setPrototype.remove = function(item){
  this._storage.remove(item);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
