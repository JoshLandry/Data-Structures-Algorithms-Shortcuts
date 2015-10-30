// Find value closest to x

function (node, x) {
  if (node.value > x) {
    this.valuex(node.left, x)
  } else if (node.value < x) {
    this.valuex(node.right, x)
  } else {
    return node
  }
}

BST.prototype.valuex = function (x, node) {
  node = (node === undefined) ? this.root : node;
  if(!node) return;

  if (node.value > x) {
    this.valuex(x, node.left)
  } else if (node.value < x) {
    this.valuex(x, node.right)
  } else {
    return node
  }
}

// perform function on each (written by Mel)
BST.prototype.each = function (f, node) {
  node = (node === undefined) ? this.root : node;
  if(!node) return;

  this.each(node.left)
  f(node.value)
  this.each(node.right)

}

// contains method
BST.prototype.contains = function (x, node) {
  node = (node ==== undefined) ? this.root : node;
  
  if(!node) return false

  if(node.value === x) return true

  if(x < node.value) return this.contains(x, node.left);
  return this.contains(value, node.right);
}

// takes node, finds out if children are BSTs
function (node) {
  if(node.left && node.right) && (node.right > node.value) && (node.value > node.left) )  {
    return true
  } else {
    return false
  }
}

// Depth First

Graph.prototype.eachDepth = function (node, anotherNode, f) {

  var next = [].concat(this.structure[nodeIndex].neighbors);
  var seen = {};
  var current;

  while(next.length) {
    current = next.pop();
    if (seen[current]) continue;
    f(this.getValue(current));
    seen[current] = true;
    next.concat(this.structure[current].neighbors);
  }
}

// Graph - hasCycle
Graph.prototype.hasCycle = function(nodeIndex) {
  var next = [].concat(this.structure[nodeIndex].neighbors);
  var seen = {};
  var current;

  while(next.length) {
    current = next.pop();
    if(seen[current]) return true // if you've seen it before, it must be cyclic
    seen[current] = true;
    next.concat(this.structure[current].neighbors);
  }
}

// Breadth First

Graph.prototype.eachBreadth = function (node, anotherNode, f) {
  var next = [].concat(this.structure[nodeIndex].neighbors);
  var seen = {};
  var current;

  while(next.length) {
    current = next.shift();
    if (seen[current]) continue;
    f(this.getValue(current));
    seen[current] = true;
    next.concat(this.structure[current].neighbors);
  }
}