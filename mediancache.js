(function(){
  
  var MedianCache = function(){
    var sum = 0;
    var count = 0;
    return  function(x){
      sum += x;
      return sum/++count;
    };
  };


  
  var root = this;

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = MedianCache;
    }
    exports.MedianCache = MedianCache;
  } else {
    root.MedianCache = MedianCache;
  }

})();
