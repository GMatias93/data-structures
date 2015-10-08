var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

<<<<<<< HEAD
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
=======
var storage = {};
storage.index = 0;

storage.push = storageMethods.push;
storage.pop = storageMethods.pop;
storage.size = storageMethods.size;


return storage;
};


var storageMethods = {};
 // debugger;
  storageMethods.push = function(value){
    (this.index) = value;
    (this.index)++;
  };

  storageMethods.pop = function(){
    if((this.index) > 0){
      var deleted = (this.index)-1;
      delete (this.index) - 1;
      (this.index)--;
>>>>>>> fde549735645325fbcbd04dabd71e0787749e2d5
      return deleted;
    }
  };

<<<<<<< HEAD
 var size = function(){
    return this.index;
  };
 // debugger;
=======
  storageMethods.size = function(){
    return (this.index);
  };
>>>>>>> fde549735645325fbcbd04dabd71e0787749e2d5
