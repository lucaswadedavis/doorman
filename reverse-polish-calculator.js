(function(){
  
  var root = this;

  var rpc = function(x){
    var ops = /\+|\-|\/|\*/;
    var input = x.split(" ");
    var stack = [];
    var accumulator = parseFloat(input[0],10);
    for (var i=1;i<input.length;i++){
      // check for operator match
      if (ops.test(input[i])){
        // unload the stack evaling the operation
        while(stack.length>0){
          accumulator = eval("accumulator "+input[i]+" "+stack.pop() );
        }

      } else {
        // push input to the stack
        stack.push(input[i]);
      }
    }

    return accumulator;
  };


  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = rpc;
    }
    exports.rpc = rpc;
  } else {
    root.rpc = rpc;
  }

})();
