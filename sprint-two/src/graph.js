

var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(node){
  this.nodes[node] = {};
};

Graph.prototype.contains = function(node){
  return this.nodes.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node){
  _.each(this.nodes[node], function (other) {
    delete this.nodes[other][node];
  });
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return this.nodes[fromNode].hasOwnProperty(toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode][toNode] =  'it\'s a secret to everybody';
  this.nodes[toNode][fromNode] =  'it\'s a secret to everybody';
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, function(value, key){
    cb(key);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



