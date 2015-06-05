(function(){
  
  var root = this;

  var balancedParens = function(x){
    var stack = [];
    var balanced = true;
    var sequence = x.split("");
    var opening = /\{|\[|\(|\</ ;
    var closing = /\}|\]|\)|\>/ ;
    var pairs = {"{}":true,"[]":true,"()":true,"<>":true};
    
    for (var i=0;i<sequence.length;i++){
      if (opening.test(sequence[i]) ){
        stack.push(sequence[i]);
      }

      if (closing.test(sequence[i]) ){
        if (!pairs[stack.pop()+sequence[i]]){
          balanced = false;
          break;
        }
      }
    }

    balanced = (stack.length>0) ? false : balanced;

    return balanced;
  };


  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = balancedParens;
    }
    exports.balancedParens = balancedParens;
  } else {
    root.balancedParens = balancedParens;
  }

})();
