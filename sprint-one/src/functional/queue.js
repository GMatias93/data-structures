var Queue = function(){
  var someInstance = {};
<<<<<<< HEAD
  var newQueue = 0;
    var delCounte = 0;
=======
  var index = 0;
  var deleted = 0;

>>>>>>> fde549735645325fbcbd04dabd71e0787749e2d5

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
<<<<<<< HEAD
    storage[newQueue + delCounte] = value;
    newQueue++;
  };

  someInstance.dequeue = function(){
    if(newQueue > 0) {
    console.log(storage);
    var items = storage[delCounte];
    delete storage[delCounte];
    newQueue--;
    delCounte++
    return items;
    }
    // if(newQueue) {
    //   delete storage[0];
    // }
    // return newQueue;
  };

  someInstance.size = function(){
    return newQueue;
=======
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
>>>>>>> fde549735645325fbcbd04dabd71e0787749e2d5
  };

  return someInstance;
};
