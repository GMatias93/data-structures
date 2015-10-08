var Queue = function(){
 // Hey! Rewrite in the new style. Your code will wind up looking very similar,
 // but try not not reference your old code in writing the new style.
 var obj = {};
 obj.storage = {};
 obj.counter = 0;
 obj.enqueue = queueMethods.enqueue;
 obj.dequeue = queueMethods.dequeue;
 obj.size = queueMethods.size;
 return obj;

};

var queueMethods = {};

queueMethods.enqueue = function(value){
    this.storage[this.counter] = value;
    this.counter++;
}
queueMethods.dequeue = function(){
    if(this.counter > 0){
        var temp = this.storage[this.counter - this.counter]
        delete this.storage[this.counter -this.counter];
        this.storage[0] = this.storage[1];
        this.counter--;
        return temp;
    }
}

queueMethods.size = function(){
    return this.counter;
}