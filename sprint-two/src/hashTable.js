var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.getIndexBelowMaxForKey = getIndexBelowMaxForKey;
};
//O(1)
HashTable.prototype.insert = function(k, v){
  var i = this.getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, v);
};
//O(1)
HashTable.prototype.retrieve = function(k){
  var i = this.getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i);
};
//O(1)
HashTable.prototype.remove = function(k){
  var i = this.getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
