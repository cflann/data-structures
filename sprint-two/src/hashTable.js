var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._keys = [];
  this._size = 0;
};
//O(1) most of the time, O(n) when rebalancing
HashTable.prototype.insert = function(k, v){
  this._keys.push(k);
  var i = getIndexBelowMaxForKey(k, this._limit);
  var list = this._storage.get(i) || LinkedList();
  this._storage.set(i, list);
  this._storage.get(i).contains(k, true) || this._size++;
  this._storage.get(i).addToTail(v,k);
  this.rebalance();
};
//O(1)
HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var list = this._storage.get(i);
  return list ? list.find(k).value : null;
};
//O(1) most of the time, O(n) when rebalancing
HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(i) && this._size--;
  this._storage.set(i, null);
  this.rebalance();
};

// O(n)
HashTable.prototype.rebalance = function() {
  var newArray;
  var oldLimit = this._limit;
  if (this._size < Math.ceil(.25 * this._limit)) {
    this._limit = Math.ceil(this._limit / 2);
  } else if (this._size > Math.floor(.75 * this._limit)) {
    this._limit = this._limit * 2;
  } else {
    return;
  }
  newArray = LimitedArray(this._limit);
  var that = this;
  _.each(this._keys, function(key) {
    var oldValue = that._storage.get(getIndexBelowMaxForKey(key, oldLimit));
    if (oldValue !== null) {
      newArray.set(getIndexBelowMaxForKey(key, that._limit),
                   oldValue);
    }
  });
  this._storage = newArray;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
