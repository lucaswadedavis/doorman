(function(){

  var balancedParens = function (str) {
    var stack = [];
    var o = '([{';
    var c = ')]}';

    for (var i = 0; i < str.length; i++) {
      if (o.indexOf(str[i]) > -1) {
        var index = o.indexOf(str[i]);
        stack.push(c[index]);
      } else if (c.indexOf(str[i]) > -1 && stack.pop() !== str[i]) {
        return false;
      }
    }

    return !stack.length;
  };
  
  var root = this;

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = balancedParens;
    }
    exports.balancedParens = balancedParens;
  } else {
    root.balancedParens = balancedParens;
  }

})();
