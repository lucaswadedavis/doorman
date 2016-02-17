(function(){

  var rpc = function (str) {
    var stack = [];
    var ops = /\+|\-|\*|\//;
    
    return str.split(' ').reduce(function (m, n, i) {
      if (i === 0) return m;
      if (ops.test(n)) {
        while (stack.length > 0) {
          m = eval('m' + n + stack.pop());
        }
      } else {
        stack.push(n);
      }
      return m;
    }, parseFloat(str[0], 10));
  }

  var root = this;

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = rpc;
    }
    exports.rpc = rpc;
  } else {
    root.rpc = rpc;
  }

})();
