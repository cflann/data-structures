

var Graph = function(){
  this.nodes = {};
};
//O(1)
Graph.prototype.addNode = function(node){
  this.nodes[node] = {};
};
//O(1)
Graph.prototype.contains = function(node){
  return this.nodes.hasOwnProperty(node);
};
//O(n)
Graph.prototype.removeNode = function(node){
  _.each(this.nodes[node], function (other) {
    delete this.nodes[other][node];
  });
  delete this.nodes[node];
};
//O(1)
Graph.prototype.hasEdge = function(fromNode, toNode){
  return this.nodes[fromNode].hasOwnProperty(toNode);
};
//O(1)
Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode][toNode] =  'it\'s a secret to everybody';
  this.nodes[toNode][fromNode] =  'it\'s a secret to everybody';
};
//O(1)
Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
};
//O(n)
Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, function(value, key){
    cb(key);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



