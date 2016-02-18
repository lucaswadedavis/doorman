(function(){

  var countChange = function(money, coins) {
    if (money < 0 || coins.length === 0) return 0;
    if (money === 0) return 1;
    return countChange(money - coins[0], coins) + countChange(money, coins.slice(1));
  };  

  var root = this;

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = countChange;
    }
    exports.countChange = countChange;
  } else {
    root.countChange = countChange;
  }

})();
