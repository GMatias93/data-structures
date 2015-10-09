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
//
for(var i = 0; i < this.children.length; i++) {
    if(this.children[i].value === target) {
      return true;
    } else {
      for(var j = 0;j < this.children[i].length;j++) {
        for(var k=0;k<this.children[i][j].length;k++) {
          if(this.children[i][j][k].value === target) {
            return true;
          }
        }
      }
    }
    return this.contains(this.children[i].value);
  }
    return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
