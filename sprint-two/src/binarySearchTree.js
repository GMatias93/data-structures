var BinarySearchTree = function(value){
var branch = {};
branch.value = value;
branch.right = null;
branch.left =  null;
_.extend(branch, branchMethods);
return branch;
};
var branchMethods = {};

branchMethods.insert = function(val){
	var innerFunc = function(branches){
		if(val > branches.value){
			if(branches.right === null){
				branches.right = BinarySearchTree(val);
			}else{
				innerFunc(branches.right);
			}
		}else if(val < branches.value){
				if(branches.left === null){
					branches.left = BinarySearchTree(val);
				}else{
					innerFunc(branches.left);
				}
			}
	};		
innerFunc(this);
};

branchMethods.contains = function(val){
	var found = false;
	// var innerFunc = function(branches){
		if(this.value === val){
			found = true;
		} else if(this.right.value === val){
			found = true;
		} else if(this.left.value === val){
			found = true;
		// } else {
			// innerFunc(this.left);
		// }
		
	}
	 	return found;

};

branchMethods.depthFirstLog = function(callback){
	var innerFunc = function(branches){
		callback(branches.value);
		if(branches.left){
			innerFunc(branches.left);
		} else if(branches.right){
			innerFunc(branches.right);
		}
	}
	innerFunc(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
