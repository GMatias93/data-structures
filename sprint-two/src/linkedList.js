var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  // var index = 0;
  // console.log(Linke)

  list.addToTail = function(value){
    var newNode = Node(value);
    list.tail = newNode;
    if(list.head === null){
      list.head = newNode;
    }
// console.log(list);
  };

  list.removeHead = function(){
    var oldHead = list.head['value'];
    list.head = list.tail;
    // console.log(oldHead);
    return oldHead;
  };

  list.contains = function(target){
    console.log(list);
    if(list.head.value === target || list.tail.value === target){
      return true;
    }
    // for(var key in list){        
    //   if(list[key].value === target){
    //     return true;
    
         return false;
  };

  return list;
};
var Node = function(value){
  var node = {}; 

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */