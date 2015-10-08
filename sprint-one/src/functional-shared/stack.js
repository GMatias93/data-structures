var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

var stacked = {};
stacked.index = 0;
stacked.storage = [];
stacked.push = push;
stacked.pop = pop;
stacked.size = size;

return stacked;
};

 var push = function(value){
    this.storage[this.index] = value;
    this.index++;
  };

 var pop = function(){
    if(this.index > 0){
      var deleted = this.storage[this.index-1];
      delete this.storage[this.index-1];
      this.index--;
      return deleted;
  }
};

 var size = function(){
    return this.index;
  };
 // debugger;