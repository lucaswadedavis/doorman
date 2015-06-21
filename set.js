(function(){

  var Set = function(){
    var storage = {};

    this.add = function(x){
      storage[x]=true;
    };

    this.remove = function(x){
      var temp = storage[x] || null;
      delete storage[x];
      return temp;
    };

    this.size = function(){
      var storageSize = 0;
      for (var key in storage){storageSize++;}
      return storageSize ;
    };

    this.clear = function(){
      storage = {};
    };

    this.contains = function(x){
      var r = false;
      for (var key in storage){
        if (key === x){
          r=true;
          break;
        }
      }
      return r;
    };
  };



  var root = this;

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = Set;
    }
    exports.Set = Set;
  } else {
    root.Set = Set;
  }

})();
