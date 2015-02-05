var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  //O(1)
  list.addToHead = function (value) {
    if (this.head === null) {
      this.head = Node(value);
      this.tail = this.head;
    } else {
      this.head.prev = Node(value);
      this.head.prev.next = this.head;
      this.head = this.head.prev;
    }
  };
  //Constant time O(1)
  list.addToTail = function(value){
    if (this.head === null) {
      this.head = Node(value);
      this.tail = this.head;
    } else {
      this.tail.next = Node(value);
      this.tail.next.prev = this.tail;
      this.tail = this.tail.next;
    }
  };
  //O(1)
  list.removeTail = function () {
    var value = this.tail;
    delete this.tail;
    this.tail = value.prev;
    this.tail.next = null;
    this.head = this.head === value ? null : this.head;
    return value.value;
  };
  //O(1)
  list.removeHead = function(){
    var value = this.head;
    delete this.head;
    this.head = value.next;
    this.head.prev = null;
    this.tail = this.tail === value ? null : this.tail;
    return value.value;
  };
  //O(n)
  list.contains = function(target){
    var current = this.head;
    while (current) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
