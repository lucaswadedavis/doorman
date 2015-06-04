(function(){
  
  var LinkedList = function(){
    this.head = null;
    this.tail = null;

    var Node = function(val){
      this.value = val;
      this.next = null;
    };
    
    this.addToTail = function(val){
      if (!this.tail){
        this.head = new Node(val);
        this.tail = this.head;
      } else {
        var oldTail = this.tail;
        this.tail = new Node(val);
        oldTail.next = this.tail;
      }
    };

    this.removeFromHead = function(){
      var oldHead = this.head;
      this.head = oldHead.next;
      if (this.head === null){this.tail=null;}
      return oldHead;
    };
    
    this.size = function(){
      var size = this.head ? 1 : 0;
      for (var node = this.head; node.next ; node = node.next){
        size++;
      };
      return size;
    };
  
    this.each = function(cb){
      for (var node = this.head; node ; node = node.next){
        cb(node.value);
      }
    };
  
  };


  
  var root = this;

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = LinkedList;
    }
    exports.LinkedList = LinkedList;
  } else {
    root.LinkedList = LinkedList;
  }

})();
