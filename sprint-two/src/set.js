var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};
//O(1)
setPrototype.add = function(item){
  var str = JSON.stringify(item);
  if (!this.contains(item)) {
    this._storage[str] = str;
  }
};
//O(1)
setPrototype.contains = function(item){
  return this._storage.hasOwnProperty(JSON.stringify(item));
};
//O(1)
setPrototype.remove = function(item){
  delete this._storage[JSON.stringify(item)];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
