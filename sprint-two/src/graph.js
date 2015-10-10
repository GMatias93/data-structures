

var Graph = function(){
  // console.log('this is the Graph',Graph)
  // var obj = {};
  this.value;
  this.childNodes = [];
};

Graph.prototype.addNode = function(node){
  console.log(this.childNodes);
  if(this.value){
    node = new Graph();
    // this.value = node;
    this.childNodes.push(node);
  } else {
    this.value = node; 
  }


};

Graph.prototype.contains = function(node){

  if(this.value === node) {
    return true;
  }
  return false;

};

Graph.prototype.removeNode = function(node){
  if(this.value === node){
  delete this.value; //this is probably going to break our code
    
  } else {
    for(var i = 0; i < this.childNodes.length; i++){
      if(this.childNodes[i] === node){  
      delete this.childNodes[i];
      }
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){

};

Graph.prototype.addEdge = function(fromNode, toNode){
  // console.log(this)

};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



