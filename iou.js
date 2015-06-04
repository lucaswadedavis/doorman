(function(){
  
  var Iou = function(cb){
    var accumulator;
    cb.then = function(tcb){
      if (accumulator===undefined){
        
      } else {

      }
    };
    cb.resolve = function(){
      return accumulator;
    };

    return function(){
      accumulator = cb.apply(null,arguments);
    };
  };  
  
  var root = this;

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = Iou;
    }
    exports.Iou = Iou;
  } else {
    root.Iou = Iou;
  }

})();
