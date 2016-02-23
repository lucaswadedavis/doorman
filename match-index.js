(function(){

  var matchIndex = function (arr) {
    for (var i = 0; i < arr.length; i++) {
      if ( i === arr[i] ) {
        return i;
      }
    }
    return false;
  };

  var root = this;

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = matchIndex;
    }
    exports.matchIndex = matchIndex;
  } else {
    root.matchIndex = matchIndex;
  }

})();
