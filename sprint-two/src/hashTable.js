var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //retrieve the bucket at the provided index
  var bucket = this._storage.get(i);
  //if the bucket does not exist, create it
  if(!bucket){
  	bucket = [];
    //set it to the provided index in the hash
    this._storage.set(i, bucket);
  }

  var found = false;
  //iterate over the bucket
  for(var i = 0; i < bucket.length; i++){
    //set each index in bucket equal to tuple
    var tuple = bucket[i];
    //key exists?
    if(tuple[0] === k){
      //update it
      tuple[1] = v;
      found = true;
      break;
    }
  }

  //if no key was found
  if(!found){
    //insert a new tuple
    bucket.push([k, v]);  
  } 

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //retrieve the bucket at i
  var bucket = this._storage.get(i)
  // iterate over the bucket
  for(var i = 0; i < bucket.length; i++){
    //set each iteration to tuple
    var tuple = bucket[i];
    // does key exist?
    if(tuple[0] === k){
      //return the value
      return tuple[1]
    }
  }
  //return null if nothing was found
  return null;
};


HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
		// retrieve the bucket at i
    var bucket = this._storage.get(i)
    //iterate over the bucket
		for(var i = 0; i < bucket.length; i++){
      //set each iteration to tuple
      var tuple = bucket[i];
        //does the key exist?
        if(tuple[0] === k){
          //delete the tuple
          bucket[i] = [];
        }
    }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
