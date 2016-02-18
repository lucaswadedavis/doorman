(function(){
  
  var sumOfSquares = function () {
   return Array.prototype.slice.call(arguments).reduce(function (m, n) {
     return m + n * n;
   }, 0);
  };

  var root = this;

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = sumOfSquares;
    }
    exports.sumOfSquares = sumOfSquares;
  } else {
    root.sumOfSquares = sumOfSquares;
  }

})();
