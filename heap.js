(function(){
  // Min Binary Heap 
  var Heap = function(){
    var storage = [];
    this.add = function(x){
      storage.push(x);
      var count = 0;
      var childIndex = storage.length-1;
      while(count<100 && childIndex>0){
        count++;
        var parentIndex = Math.floor((childIndex-1)/2);
        if (storage[parentIndex]<storage[childIndex]){
          var temp = storage[childIndex];
          storage[childIndex] = storage[parentIndex];
          storage[parentIndex] = temp;
          childIndex = parentIndex;
        } else {
          break;
        }
      }

    };
    this.size = function(){ return storage.length;};

    this.contains = function(x){
      for (var i=0;i<storage.length;i++){
        if (storage[i] === x ){
          return true;
        }
      }
      return false;
    };

  };


  
  var root = this;

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = Heap;
    }
    exports.Heap = Heap;
  } else {
    root.Heap = Heap;
  }

})();
