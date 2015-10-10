

var Graph = function(){
  // console.log('this is the Graph',Graph)
  // var obj = {};
  this.nodeList = [];
  this.connectedNodes = [];

  // this.value;
};


Graph.prototype.addNode = function(node){
  console.log(this);
  // if(this.value){
  //     var Newnode = new Graph();
  //   }
  //     this.value = node;
    // this.childNodes. = node;
    // this.childNodes.push(node);
  // } else {
    // this.value = node; 
 // }
  // var newNode = new Graph();
    this.nodeList.push(node);


};

Graph.prototype.contains = function(node){
  for(var i = 0; i < this.nodeList.length; i++){
    if(this.nodeList[i] === node){
      return true;
  } else {
    return false;
  }
}
//   if(this.value === node){
//     return true;
//   }
// for(var i = 0; i < this.childNodes.length; i++){
//   if(this.childNodes[i].value === node) {
//     return true;
//   }
// }
//   return false;

};

Graph.prototype.removeNode = function(node){

  for(var i = 0; i < this.nodeList.length; i++){
    if(this.nodeList[i] === node){
      delete this.nodeList[i];
  }
}
  // delete this.value; //this is probably going to break our code
    
  // } else {
  //     if(this.childNodes[i] === node){  
  //     delete this.childNodes[i];
  //     }
  //   }
  // }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  if(this.contains(fromNode) && this.contains(toNode)){
    return true;
  } else {
    return false;
  }
  // if(fromNode.childNodes.contains(toNode) || toNode.childNodes.contains(fromNode)) {
  //   return true;
  // }
  // return false;

  // for(var i = 0; i < this.childNodes.length; i++){
  //   if(this.contains(fromNode) && this.contains(toNode) && this.childNodes[i].connected ) {

  // //if(){
//     if(this.connection === fromNode,toNode) {
//     return true;
//   }
//   return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  // var firstNode;
  // console.log('fromNode', fromNode);
  // for(var i = 0; i < this.nodeList.length; i++){
  //   if(this.nodeList[i] === fromNode)
  //     firstNode = this.nod
  // }
  if(this.contains(fromNode) && this.contains(toNode)) {
    this.connectedNodes.push(fromNode, toNode);
  }
  // }
  // fromNode.connected = false;
  // console.log(fromNode)
  //   connected = true
  //   console.log(connected)
  //   // return connected;
  // }
  // return connected;
  // if(this.contains(fromNode) && this.contains(toNode)) {
  //   for(var i = 0; )
  // this.connected = true;
  //   fromNode.childNodes.push(toNode);
  //   toNode.childNodes.push(fromNode);
  // 
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



