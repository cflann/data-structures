var Trie = function(words) {
  this.root = new Trie.Node();
  this.generate(words);
};

Trie.prototype.generate = function (words){
  _.each(words, (function (word) {
    this.insert(word, this.root);
  }).bind(this));
};

Trie.prototype.insert = function (word, node) {
  if (word === '' && (node.parent !== this.root)){
    node.isWord = true;
    return;
  }
  //{'a': someNode}
  var child = {};
  var char = word.charAt(0);
  if (node.children.length > 0) {
    _.each(node.children, (function (child) {
      if (child.hasOwnProperty(char)) {
        return this.insert(word.slice(1), child[char]);
      } else {
        child[char] = new Trie.Node((node.prefix + char), node);
        node.children.push(child);
        return this.insert(word.slice(1), child[char]);
      }
    }).bind(this));
  } else {
    child[char] = new Trie.Node((node.prefix + char), node);
    node.children.push(child);
    return this.insert(word.slice(1), child[char]);
  }
};


Trie.Node = function(prefix, parent) {
  this.prefix = prefix || '';
  this.parent = parent || null;
  this.isWord = false;
  this.children = [];
};
