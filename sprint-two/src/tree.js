var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};





var treeMethods = {};

// O(1)
treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

// O(n)
treeMethods.contains = function(target){
  var found = (this.value === target)? true : false;
  _.each(this.children, function(child) {
    found = found || child.contains(target);
  });
  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
