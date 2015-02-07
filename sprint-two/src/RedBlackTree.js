var RedBlackTree = function() {
  this.root = null;
};

RedBlackTree.prototype.insert = function(value) {
  if (this.root === null) {
    this.root = new RBNode(value, null);
  }
  var result;
  var current = this.root;
  while (current) {
    console.log('while');
    if (value > current.value) {
      if (current.right === null) {
        current.right = new RBNode(value, current);
        result = current.right;
      } else {
        current = current.right;
      }
    } else if (value < current.value) {
      if (current.left === null) {
        current.left = new RBNode(value, current);
        result = current.left;
      } else {
        current = current.left;
      }
    } else {
      result = current;
      break;
    }
  }
  this._insertCaseOne(result);
};

RedBlackTree.prototype._insertCaseOne = function(node) {

  if (node !== undefined) {
    if (this.root === node) {
      node.red = false;
    } else {
      this._insertCaseTwo(node);
    }
  }
};

RedBlackTree.prototype._insertCaseTwo = function(node) {
  if (node.parent.red) {
    this._insertCaseThree(node);
  }
};

RedBlackTree.prototype._insertCaseThree = function(node) {
  var g = node.grandparent();
  var u = node.uncle();
  if (u !== null && u.red && node.parent.red) {
    g.red = true;
    u.red = false;
    node.parent.red = false;
    this._insertCaseOne(g);
  } else {
    this._insertCaseFour(node);
  }
};

RedBlackTree.prototype._insertCaseFour = function(node) {
  if (node.parent.red &&
      (!node.uncle() || !node.uncle().red) &&
      node.parent.right === node &&
      node.grandparent().left === node.parent) {
    this.rotateLeft(node.parent);
  } else if (node.parent.red &&
          (!node.uncle() || !node.uncle().red) &&
          node.parent.left === node &&
          node.grandparent().right === node.parent){
    this.rotateRight(node.parent);
  }
  this._insertCaseFive(node);
};

RedBlackTree.prototype._insertCaseFive = function (node) {
  var p = node.parent;
  var g = p.parent;
  p.red = false;
  g.red = true;
  if (node === p.left && p === g.left) {
    this.rotateRight(p);
  } else {
    this.rotateLeft(p);
  }
};

RedBlackTree.prototype.rotateLeft = function(node) {
  var parent = node.parent;
  var child = node.right;
  if (this.root === parent) {
    this.root = node;
  } else {
    node.parent.parent.right = node;
  }
  parent.right = node.left;
  node.left = parent;
  node.parent = parent.parent;
  parent.parent = node;
};

RedBlackTree.prototype.rotateRight = function(node) {
  var parent = node.parent;
  var child = node.left;
  if (this.root === parent) {
    this.root = node;
  } else {
    node.parent.parent.left = node;
  }
  parent.left = node.right;
  node.right = parent;
  node.parent = parent.parent;
  parent.parent = node;
};

RedBlackTree.prototype.find = function (value) {
  var search = function (node) {
    if (value > node.value) {
      return (node.right === null) ? false : search(node.right);
    } else if (value < node.value) {
      return (node.left === null) ? false : search(node.left);
    } else {
      return true;
    }
  };
  return search(this.root);
};
var RBNode = function(value, parent) {
  this.red = true;
  this.value = value;
  this.parent = parent;
  this.left = null;
  this.right = null;
};

RBNode.prototype.grandparent = function() {
  if (this.parent) {
    return this.parent.parent;
  }
  return null;
};

RBNode.prototype.uncle = function() {
  var g = this.grandparent();
  if (this.parent && g) {
    return (this.parent === g.left) ? g.right : g.left;
  }
  return null;
};
