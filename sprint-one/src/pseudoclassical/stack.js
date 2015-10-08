var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.index = 0;
  this.storage = {};
  };

var obj = new Stack();


Stack.prototype = {
  size :function(){
  return this.index;
  },
  push : function(val){
    this.storage[this.index] = val;
    this.index++;
  },
  pop : function(){
    if(this.index >0) {
    var popped = this.storage[this.index-1];
    delete this.storage[this.index-1];
    this.index--;
    return popped;
    }
  },
  constructor : Stack
  };
