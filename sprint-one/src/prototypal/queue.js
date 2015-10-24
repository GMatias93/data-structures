var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.index = 0;
  obj.storage = [];
  return obj;
};

var queueMethods = {};

queueMethods.size = function(){
	return this.index;
};

queueMethods.enqueue = function(value){
	this.storage.push(value);
	this.index ++;
}

queueMethods.dequeue = function(){
	if(this.index === 0){
		return
	} else {
		this.index --;
		return this.storage.shift()
	}
}

