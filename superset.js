(function(){
  
  var SuperSet;

  SuperSet = function () {
    var storage = {};

    this.contains = function (x) {
      return !!storage[JSON.stringify(x)];
    };

    this.add = function (x) {
      storage[JSON.stringify(x)] = x;
    };

    this.remove = function(x) {
      delete storage[JSON.stringify(x)];
    };

    this.clear = function() {
      storage = {};
    };

    this.isEmpty = function () {
      return !Object.keys(storage).length;
    };


  };

  var root = this;

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = SuperSet;
    }
    exports.SuperSet = SuperSet;
  } else {
    root.SuperSet = SuperSet;
  }

})();
