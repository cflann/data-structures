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

treeMethods.removeFromParent = function () {
  this.parent.children = _.filter(this.parent.children, function (element) {
    return element === this;
  });
  this.parent = null;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
