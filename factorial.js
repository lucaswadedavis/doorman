(function(){
  
  var factorial = function (x) {
    if (x === 1) return x;
    return x * factorial(x - 1);
  };

  var root = this;

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = factorial;
    }
    exports.factorial = factorial;
  } else {
    root.factorial = factorial;
  }

})();
