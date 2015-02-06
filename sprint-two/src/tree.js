var Tree = function(value, parent){
  var newTree = {};
  newTree.value = value;
  newTree.parent = parent || null;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};





var treeMethods = {};

// O(1)
treeMethods.addChild = function(value){
  this.children.push(Tree(value, this));
};

// O(n)
treeMethods.contains = function(target){
  var found = (this.value === target)? true : false;
  _.each(this.children, function(child) {
    found = found || child.contains(target);
  });
  return found;
};

//O(n)
treeMethods.removeFromParent = function () {
  this.parent.children = _.filter(this.parent.children, function (child) {
    return child === this;
  });
  this.parent = null;
};

treeMethods.traverse = function(cb) {
  cb(this.value);
  _.each(this.children, function(child) {
    child.traverse(cb);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
