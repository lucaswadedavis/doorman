(function(){
  
  var root = this;

  var breadthFirstSearch = function(node,f){
    var results = [];
    var stack = [node];
    var count = 0;

  function Node (value) {
      this.value = value;
      this.children = [];
  }

  let root = new Node('root');
  let child1 = new Node('child1');
  let child2 = new Node('child2');

  let grandchild1 = new Node('grandchild1');
  let grandchild2 = new Node('grandchild2');
  let grandchild3 = new Node('grandchild3');
  let grandchild4 = new Node('grandchild4');
  let grandchild5 = new Node('grandchild5');

  root.children.push(child1, child2);
  child1.children.push(grandchild1, grandchild2, grandchild3);
  child2.children.push(grandchild4, grandchild5);

  function breadthFirstMap (root, callback) {
      let queue = [];
      let next = root;
      
      while (next) {
          callback(next.value);
          if (next.children) {
              queue = queue.concat(next.children);
          }
          next = queue.shift();
      }
  }

  breadthFirstMap(root, function (value) {console.log(value);});  


    return results.length ? results : null;
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = breadthFirstSearch;
    }
    exports.breadthFirstSearch = breadthFirstSearch;
  } else {
    root.breadthFirstSearch = breadthFirstSearch;
  }

})();
