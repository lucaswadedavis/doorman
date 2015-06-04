(function(){
  
  var Iou = function(cb, accumulator){
    accumulator = accumulator || null;
    var iou = function(){
      accumulator = cb.apply(null,arguments);
      return new Iou(function(){return accumulator}, accumulator);
    };
    iou.then = function(cb2,err){
      
      accumulator = cb2(accumulator);
      return new Iou(function(){return accumulator;}, accumulator);
      
    };
    iou.resolve = function(){
      return accumulator;
    };

    return iou;
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
