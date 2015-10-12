var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
  // this.index = 0;
};
  // set.index = 0;

var setPrototype = {};

setPrototype.add = function(item){
  this._storage.push(item);
  // var value = item;
  // this.index++;
};

setPrototype.contains = function(item){
  var found = false;
  _.each(this._storage, function(val, key){
    if(val === item){
      found = true;
    }
  });
  return found;
  // for(var key in this._storage){
  //   console.log(this._storage);
  //   if(this._storage.key === item){
  //     return true;
  //   } else {
  //     return false;
  //   }
    
  // }
};

setPrototype.remove = function(item){
    // console.log(this._storage);
  _.each(this._storage, function(val, index, list){
    if(val === item){
      list.splice(index, 1);
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
