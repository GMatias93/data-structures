var Queue = function(){
  var someInstance = {};
  var newQueue = 0;
  var delCounte = 0;


  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
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
  };
  return someInstance;
};
