

var Graph = function(){
  this.nodeList = [];
};

var A_node = function(name){
  this.name = name;
  this.edges = [];
};

Graph.prototype.addNode = function(node){
  var newNode = new A_node;
  newNode.name = node;
  this.nodeList.push(newNode);
};

Graph.prototype.contains = function(node){
  for(var i = 0; i < this.nodeList.length; i++){
    if(this.nodeList[i].name === node){
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  for(var i = 0; i < this.nodeList.length; i++){
    if(this.nodeList[i].name === node){
      this.nodeList.splice(i , 1); 
    }
  }

};

Graph.prototype.hasEdge = function(fromNode, toNode){
  for(var i = 0; i < this.nodeList.length; i++){
    if(this.nodeList[i].name === fromNode){
      for(var j = 0; j < this.nodeList[i].edges.length; j++){
        if(this.nodeList[i].edges[j] === toNode){
          return true;
        }
      }
    }
  }
  
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if(fromNode === toNode){
    for(var i = 0; i < this.nodeList.length; i++){
      if(this.nodeList[i].name === fromNode){
        this.nodeList[i].edges.push(toNode);
      }
    }
  } else {
    for(var i = 0; i < this.nodeList.length; i++){
      if(this.nodeList[i].name === fromNode){
        this.nodeList[i].edges.push(toNode);
      }
    }
    for(var i = 0; i < this.nodeList.length; i++){
      if(this.nodeList[i].name === toNode){
        this.nodeList[i].edges.push(fromNode);
      }
    }  
  }

};

Graph.prototype.removeEdge = function(fromNode, toNode){
  for(var i = 0; i < this.nodeList.length; i++){
    if(this.nodeList[i].name === fromNode){
      for(var j = 0; this.nodeList[i].edges.length; j++){
        if(this.nodeList[i].edges[j] === toNode){
          this.nodeList[i].edges.splice(j, 1);
        }
      }
    }
  }
  for(var i = 0; i < this.nodeList.length; i++){
    if(this.nodeList[i].name === toNode){
      for(var j = 0; this.nodeList[i].edges.length; j++){
        if(this.nodeList[i].edges[j] === fromNode){
          this.nodeList[i].edges.splice(j, 1);
        }
      }
    }
  }

};

Graph.prototype.forEachNode = function(cb){
  for(var i = 0; i < this.nodeList.length; i++){
    if(this.nodeList[i] !== undefined){
      cb(this.nodeList[i].name);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



