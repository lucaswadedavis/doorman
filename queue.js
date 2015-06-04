(function(){
  
  var Queue = function(){
    var storage = [];
    var beginning = 0;
    this.enqueue = function(x){storage.push(x);};
    this.dequeue = function(){
      var temp = storage[beginning++];
      delete storage[beginning-1];
      return temp;
    };
    this.size = function(){ return storage.length-beginning;};
  };


  
  var root = this;

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = Queue;
    }
    exports.Queue = Queue;
  } else {
    root.Queue = Queue;
  }

})();
