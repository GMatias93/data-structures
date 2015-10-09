var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  // if(this.addChild) {

this.children.push(Tree(value));
// }

};

treeMethods.contains = function(target){
// if(this.children)
for(var i = 0; i < this.children.length; i++) {
    if(this.children[i].value === target) {
      return true;
    } else if(i === this.children.length)
    this.children[i].contains(target);
      return false;
    }  
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
