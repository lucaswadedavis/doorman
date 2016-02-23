(function(){
  
  var Node = function (key, value) {
    this.key = key;
    this.value = value;
    this.right = {};
    this.left = {};
  };

  var BSTMap = function () {
    var size = 0;
    var bst;

    this.get = function (key) {
      if (this.size() === 0) return false;

      var search = function (node) {
        if (!node) return;
        if (key === node.key) return node.value;
        if (key < node.key) {
          search(node.left);
        } else {
          search(node.right);
        }
      };

      return search(bst) || false;
    };

    this.set = function (key, value) {
      if (size === 0) {
        bst = new Node(key, value);
      }

      if (!this.get(key)) size++;
      
      var insearch = function (node) {

        if (node.key === key) {
          node.value = value;
          return;
        }

        if (key < node.key) {
          if (Object.keys(node.left).length === 0) {
            node.left = new Node(key, value);
          } else {
            insearch(node.left);
          }
        } else {
          if (Object.keys(node.right).length === 0) {
            node.right = new Node(key, value);
          } else {
            insearch(node.right);
          }
        }
      };

      insearch(bst);
    };

    this.size = function () {
      return size;
    };

  };



  var root = this;

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = BSTMap;
    }
    exports.BSTMap = BSTMap;
  } else {
    root.BSTMap = BSTMap;
  }

})();
