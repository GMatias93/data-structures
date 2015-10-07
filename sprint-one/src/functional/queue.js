var Queue = function(){
  var someInstance = {};
  var index = 0;
  var deleted = 0;


  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[index + deleted] = value;
    index++;
  };

  someInstance.dequeue = function(){
    if(index > 0){
      var dequeued = storage[deleted];
      delete storage[deleted];
    index--;
    deleted++;
    return dequeued;

    }
  };

  someInstance.size = function(){
    return index;
  };

  return someInstance;
};
