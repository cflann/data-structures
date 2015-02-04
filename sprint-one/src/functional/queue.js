var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var head = 0;
  var length = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[head+length] = value;
    length++;
  };

  someInstance.dequeue = function(){
    if (length) {
      var value = storage[head];
      delete storage[head];
      length--;
      head++;
      return value;
    }
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
