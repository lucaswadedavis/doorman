(function(){
  var cb = function(val){return (val>0 && val<3);};

  var root = this;
  var cb = function(val){return (val>0 && val<3);};

  var Tree = function(val){
    this.value = val;
    this.children = [];
  };


  Tree.prototype.contains = function(target){
    var b = false;

    var walk = function(node){
      if (node.value === target){
        b = true;
        return;
      }
      for (var i=0;i<node.children.length;i++){
        walk(node.children[i]);
      }

    };

    walk(this);
    return b;
  };

  Tree.prototype.DFSelect = function(filter) {
    var r=[];
    var depth=0;
    var walk=function(node,depth){
      if (filter(node.value,depth) ){
        r.push(node.value);
      }
      for (var i=0;i<node.children.length;i++){
        walk(node.children[i],depth+1);
      }
    };


    walk(this,depth);
    return r;
  };



  Tree.prototype.BFSelect = function(filter) {
    // return an array of values for which the function filter(value, depth) returns true
    //set up a 2d array to account for depth
    var r=[];
    var walk=function(node,depth){
      if (!r[depth]){r[depth]=[];}
      if (filter(node.value,depth)){
        r[depth].push(node.value);
      }


      if (!node.children){return;}
      for (var i=0;i<node.children.length;i++){
        walk(node.children[i],depth+1);
      }
    };

    walk(this,0);
    //flatten the 2d array
    var flat=[];
    for (var i=0;i<r.length;i++){
      for (var j=0;j<r[i].length;j++){
        flat.push(r[i][j]);
      }
    }
    return flat;
  };


  Tree.prototype.addChild = function(child){
    if (!child || !(child instanceof Tree)){
      child = new Tree(child);
    }

    if(!this.isDescendant(child)){
      this.children.push(child);
    }else {
      throw new Error("That child is already a child of this tree");
    }
    return child;
  };

  Tree.prototype.isDescendant = function(child){
    if(this.children.indexOf(child) !== -1){
      return true;
    }else{
      for(var i = 0; i < this.children.length; i++){
        if(this.children[i].isDescendant(child)){
          return true;
        }
      }
      return false;
    }
  };

  Tree.prototype.removeChild = function(child){
    var index = this.children.indexOf(child);
    if(index !== -1){
      this.children.splice(index,1);
    }else{
      throw new Error("That node is not an immediate child of this tree");
    }
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = Tree;
    }
    exports.Tree = Tree;
  } else {
    root.Tree = Tree;
  }

})();
