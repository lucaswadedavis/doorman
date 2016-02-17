(function(){
  
  var Node = function (value) {
    this.value = value;
    this.children = [];
    this.add = function (node) {
      this.children.push(node);
    };
  };

  var Tree = function (value) {
    this.root = new Node(value);

    this.contains = function (value) {
      function walk (node, value) {
        if (node.value === value) return true;

        for (var i = 0; i < node.children.length ;i++) {
          walk(node.children[i], value);
        }
      };

      return walk(this.root, value) || false;
    };

    
  };

  var root = this;

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = Tree;
    }
    exports.Tree = Tree;
  } else {
    root.Tree = Tree;
  }

})();
