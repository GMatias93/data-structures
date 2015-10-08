var Stack = function(){
  var someInstance = {};
  var index = 0;

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[index] = value;
    index++;
  };

  someInstance.pop = function(){
<<<<<<< HEAD
    if(index >0) {
      var temp = storage[index -1];
      delete storage[index-1];
      index--;
      return temp;
=======
    if(index > 0) {
      var popped = storage[index-1];
      delete storage[index-1];
    index--;
    return popped;
>>>>>>> fde549735645325fbcbd04dabd71e0787749e2d5
    }
  };

  someInstance.size = function(){
    return index;
  };

  return someInstance;
};
