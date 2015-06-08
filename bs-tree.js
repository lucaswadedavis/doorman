(function(){
  
  var root = this;
  var BinarySearchTree = function(value){
    var btree = {
      value: value,
      left: null,
      right: null
    };
  
    btree.insert = function(value){ 
      if(value > this.value) {
        if(this.right === null) {
          this.right = BinarySearchTree(value);
        } else {
          this.right.insert(value);
        }
      } else {
        if(this.left === null) {
          this.left = BinarySearchTree(value);
        } else {
          this.left.insert(value);
        }
      }
    };

 
    btree.contains=function(value){
      var rtr = false;
      if(this.value === value) {
        rtr = true;
      } else {
        if(value > this.value && this.right) {
          rtr = this.right.contains(value);
        } else if (value <= this.value && this.left) {
          rtr = this.left.contains(value);
        }
      }
      return rtr;
    };

    btree.depthFirstLog=function(cb){
      cb(this.value);
      if(this.right) {
        this.right.depthFirstLog(cb);
      }
      if(this.left) {
        this.left.depthFirstLog(cb);
      }
    };

 
  return btree;
  };



  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = BinarySearchTree;
    }
    exports.BinarySearchTree = BinarySearchTree;
  } else {
    root.BinarySearchTree = BinarySearchTree;
  }

})();
