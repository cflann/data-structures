var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;


  //Constant time O(1)
  list.addToTail = function(value, key){

    if (this.head === null) {
      this.head = Node(value, key);
      this.tail = this.head;
    } else {
      this.tail.next = Node(value, key);
      this.tail = this.tail.next;
    }
  };
  //O(1)
  list.removeHead = function(){
    var value = this.head;
    delete this.head;
    this.head = value.next;
    this.tail = this.tail === value ? null : this.tail;
    return value.value;
  };
  //O(n)
  list.contains = function(target, checkKey){
    var current = this.head;
    var check = checkKey === true ? "key" : "value";
    while (current) {
      if (current[check] === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  list.traverse = function (fn) {
    var current = this.head;
    while (current) {
      fn(current);
      current = current.next;
    }
  };
  list.find = function (key) {
    var found = null;
    this.traverse(function (node) {
      if (node.key === key) {
        found = node;
      }
    });
    return found;
  };
  list.remove = function (key) {
    var previous = null;
    this.traverse(function (node) {
      if (node.key === key) {
        if (previous !== null) {
          previous.next = node.next;
        } else {
          this.head = node.next
        }
        if (node.next === null) {
          this.tail = previous;
        }
        node.next = null;
      }
      previous = node;
    });
  };

  return list;
};

var Node = function(value, key){
  var node = {};

  node.key = key || null;
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
