(function(){
  var root = this;

  var MedianCache = function(){
    var sum = 0;
    var count = 0;
    return  function(x){
      sum += x;
      return sum/++count;
    };
  };


  root.medianCache = function(x){
    var sum = 0;
    var count = 0;
    root.medianCache = function(x){
      sum += x;
      return sum/++count;
    };
    return root.medianCache(x);
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = MedianCache;
    }
    exports.MedianCache = MedianCache;
  } else {
    root.MedianCache = MedianCache;
  }

})();
