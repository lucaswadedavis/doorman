(function(){
  
  var reverseWords = function (str) {
    return str.split(' ').reverse().join(' ');    
  };

  var root = this;

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = reverseWords;
    }
    exports.reverseWords = reverseWords;
  } else {
    root.reverseWords = reverseWords;
  }

})();
