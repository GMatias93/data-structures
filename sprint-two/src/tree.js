var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  newTree.count = 0;
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  // if(this.addChild) {

this.children.push(Tree(value));
// }

};

treeMethods.contains = function(target){
  var found = false;
  if(this.value === target){
    return true;
  }
  var recurseFunc = function (array) {
    for(var i = 0; i < array.length; i++){
      if(array[i].value === target){
        found = true;
        return found;
      }
      recurseFunc(array[i].children);
    }
  }
    recurseFunc(this.children);

  return found;
}

      // for(var j = 0;j < this.children[i].length;j++) {
      //   for(var k=0;k<this.children[i][j].length;k++) {
      //     if(this.children[i][j][k].value === target) {

/*
 * Complexity: What is the time complexity of the above functions?
 */
