var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i) === undefined){
  	this._storage.set(i, []);
  }
  this._storage.get(i).push(k,v);

  // this._storage.get(i) = [];

  // this._storage[i].set = ;
  // console.log(this._storage[i]);
  // console.log(i);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for(var j = 0; j < this._storage.get(i).length; j++){
  	if(k === this._storage.get(i)[j]){
  		console.log(this._storage.get(i));
		return this._storage.get(i)[j + 1];
  	}
  }
};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
		// console.log('this is J', j);
		this._storage.each(function(val, index, list){
			if(i === index){
				for(var j = 0; j < val.length; j++){
					if(val[j] === k){
						val[j + 1] = null;
					}
				}
			}
		})

// 	for(var j = 0; j < this._storage.get(i).length; j++){
// 		console.log('this is I', i);
// 		if(i === j){

// 			for(var l = 0; l < this._storage.get(i)[j].length; l++){
// 					if(this._storage.get(i)[l] === k){
// 				this._storage.get(i)[l] = null;
// 			}	
// 		}
// 	}
// }
// 	// 			this._storage.get(i)[l] = null;
// 	// 		}
// 	// 	}
	// }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
