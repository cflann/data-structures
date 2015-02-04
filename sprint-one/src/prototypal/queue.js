var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.length = 0;
  instance.head = 0;
  return instance;
};

var queueMethods = {};
queueMethods.enqueue = function(value){
  this.storage[this.head+this.length] = value;
  this.length++;
};

queueMethods.dequeue = function(){
  if (this.length) {
    var value = this.storage[this.head];
    delete this.storage[this.head];
    this.length--;
    this.head++;
    return value;
  }
};

queueMethods.size = function(){
  return this.length;
};
