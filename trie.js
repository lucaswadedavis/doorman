(function(){

  var Trie = function () {
    rootNode = {};

    this.add = function (str) {

      var add = function (node, str) {
        var head = str[0];
        var tail = str.slice(1);
        if (!node[head]) node[head] = {};
        if (tail) add(node[head], tail);
      };

      add (rootNode, str);
    };

    this.contains = function (str) {
      var res = true;

      var check = function (node, str) {
        var head = str[0];
        var tail = str.slice(1);
        if (!head) return;

        if (!node[head]) {
          res = false;
          
          return;
        }

        check(node[head], tail);
      };

      check(rootNode, str);
      return res;
    };

    this.getPrefixes = function () {
      var prefixes = [];

      var walk = function (node, str) {
        for (var key in node) {
          prefixes.push(str + key);
          walk(node[key], str + key);
        }
      }

      walk(rootNode, '');
      return prefixes;
    };

  };

  var root = this;

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = Trie;
    }
    exports.Trie = Trie;
  } else {
    root.Trie = Trie;
  }

})();
