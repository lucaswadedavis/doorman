(function(){
  
  var Stack = function(){
    var storage = [];
    this.push = function(x){storage.push(x);};
    this.pop = function(){return storage.pop();};
    this.size = function(){ return storage.length;};
  };


  
  var root = this;

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = Stack;
    }
    exports.Stack = Stack;;
  } else {
    root.Stack = Stack;
  }

})();
