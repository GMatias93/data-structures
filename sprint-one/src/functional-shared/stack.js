var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

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
      return deleted;
    }
  };

  storageMethods.size = function(){
    return (this.index);
  };
