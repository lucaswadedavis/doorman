(function(){
  
  var Set;

  var root = this;

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = Set;
    }
    exports.Set = Set;
  } else {
    root.Set = Set;
  }

})();
