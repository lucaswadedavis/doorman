(function(){
  
  var root = this;

  var breadthFirstSearch = function(node,f){
    var results = [];
    var stack = [node];
    var count = 0;

    while(stack.length>0 && count<1000){
      count++;

      // check the node value
      //
      // add children to the stack
      //
      // pop children from the stack and check

    }

    return results.length ? results : null;
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = breadthFirstSearch;
    }
    exports.breadthFirstSearch = breadthFirstSearch;
  } else {
    root.breadthFirstSearch = breadthFirstSearch;
  }

})();
