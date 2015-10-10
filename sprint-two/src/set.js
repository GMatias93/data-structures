var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  // this.value
  return set;
};
  // set.index = 0;

var setPrototype = {};

setPrototype.add = function(item){
  this.index = item;
  this.index++;
};

setPrototype.contains = function(item){
  if(this.index === item){
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
