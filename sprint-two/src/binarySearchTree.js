var BinarySearchTree = function(value){
  var bst = {};
  bst.value = value;
  bst.left = null;
  bst.right = null;
  _.extend(bst, BinarySearchTree.methods);
  return bst;
};

BinarySearchTree.methods = {};

// O(n)
BinarySearchTree.methods.insert = function(newValue) {
  if (newValue < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(newValue);
    } else {
      this.left.insert(newValue);
    }
  } else if (newValue > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(newValue);
    } else {
      this.right.insert(newValue);
    }
  }
};

// O(n)
BinarySearchTree.methods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  if (target < this.value) {
    return (this.left === null) ? false : this.left.contains(target);
  } else { // this.value > target
    return (this.right === null) ? false : this.right.contains(target);
  }
};

// O(n)
BinarySearchTree.methods.depthFirstLog = function(cb) {
  cb(this.value);
  this.left && this.left.depthFirstLog(cb);
  this.right && this.right.depthFirstLog(cb);
};

BinarySearchTree.methods.breadthFirstLog = function () {
  var q = new Queue();
  q.enqueue(this);
  var current;
  while (current = q.dequeue()) {
    console.log(current.value);
    current.left !== null && q.enqueue(current.left);
    current.right !== null && q.enqueue(current.right);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
