var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.length = 0;
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {};


stackMethods.push = function(value){
  this.storage[++this.length] = value;
};

stackMethods.pop = function(){
  var result = this.storage[this.length];
  delete this.storage[this.length];
  this.length && this.length--;
  return result;
};

stackMethods.size = function(){
  return this.length;
};

