var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.index = 0;
  this.storage = {};
};

var obj = new Queue();

Queue.prototype = {
  size : function(){
    return this.index;
  },

  enqueue : function(val){
    this.storage[this.index] = val;
    this.index++;
  },

  dequeue : function(){
    if(this.index > 0){
      var dequeued = this.storage[0];
      delete this.storage[0]
      this.storage[0] = this.storage[1];
      this.index--;
      return dequeued;
    }
  },
    constructor : Queue
};
