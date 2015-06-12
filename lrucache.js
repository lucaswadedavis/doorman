(function(){
  
  var root = this;
  
  var LRUCache = function(limit){
    limit = limit+1 || 5;
    var count = limit+1;
    var setSize = 0;
    var cache = {};
    var rota = [];
    var ledger = {};


    var lruc = {};

    lruc.get = function(key){
      count++;
      var rotaIndex = count % limit;

      if (rota[rotaIndex] !== undefined){
        if (ledger[rota[rotaIndex] ] === rotaIndex){
          //uncache
          delete cache[rota[rotaIndex]];
        }
      }        
      
      rota[rotaIndex] = key;
      ledger[key] = rotaIndex;

      return cache[key] || null;
    };

    lruc.set = function(key,value){
      count++;
      
      var rotaIndex = count % limit;
      var formerCache = cache[rota[rotaIndex]];

      if (rota[rotaIndex] !== undefined){
        if (ledger[rota[rotaIndex] ] === rotaIndex && setSize>limit){
          //uncache
          delete cache[rota[rotaIndex]];
          setSize--;
        }
      }        
      
      rota[rotaIndex] = key;
      ledger[key] = rotaIndex;
      cache[key] = value;
      setSize++;

      return formerCache || null;
    };

    return lruc;
  };


  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = LRUCache;
    }
    exports.LRUCache = LRUCache;;
  } else {
    root.LRUCache = LRUCache;
  }

})();
