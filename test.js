
describe("mergeSort()",function(){
  var mSort = mergeSort;

  it("should return a sorted array",function(){
    var a = [1, 2, 3];
    var c = [1, 2, 3];

    expect(mSort(a)).to.deep.equal(c);
  });

  it("should return a sorted array.",function(){
    var a = [1, 3, 2];
    var c = [1, 2, 3];

    expect(mSort(a)).to.deep.equal(c);
  });

});


describe("balancedParens()",function(){
  var b = balancedParens;
  it("should return true if balanced",function(){
    expect( b("()") ).to.equal(true);
    expect( b("[123][]") ).to.equal(true);
    expect( b("{ab()}") ).to.equal(true);
    expect( b("") ).to.equal(true);
  });

  it("should return false if unbalanced",function(){
    expect( b("(") ).to.equal(false);
    expect( b(")(") ).to.equal(false);
    expect( b("([)]") ).to.equal(false);
    expect( b("(){") ).to.equal(false);
  });

});


describe("rpc()",function(){
  
  it("should add like this: 2 3 +",function(){
    expect(rpc("2 3 +") ).to.equal(5);
  });

  it("should divide like this: 3 3 /",function(){
    expect(rpc("3 3 /") ).to.equal(1);
  });

  it("should chain like this: 3 1 - 2 /",function(){
    expect(rpc("3 1 - 2 /") ).to.equal(1);
  });

});

describe("Set()",function(){

  it("should properly report an empty set",function(){
    var s = new Set();

    expect(s.isEmpty()).to.equal(true);

    s.add("dog");
    expect(s.isEmpty()).to.equal(false);

    s.remove("dog");
    expect(s.isEmpty()).to.equal(true);
  });



  it("should properly report whether an element is present in the set",function(){
    var s = new Set();
    s.add("dog");
    
    expect(s.contains("dog") ).to.equal(true);
    expect(s.contains("fox") ).to.equal(false);
    s.clear();
    expect(s.contains("dog") ).to.equal(false);
  });


  it("should report an accurate size",function(){
    var s = new Set();
    expect( s.size() ).to.equal(0);

    s.add("one");
    expect( s.size() ).to.equal(1);
    s.add("one");
    expect( s.size() ).to.equal(1);
    s.remove("one");
    expect(s.size() ).to.equal(0);
    
    for (var i=0;i<10;i++){s.add(i);}

    expect(s.size() ).to.equal(10);

    s.clear();

    expect(s.size() ).to.equal(0);

  });


});

describe("TicTacToe()",function(){

  function indexToCoords (index) {
    return {row: Math.floor(index / 3), column: index % 3};
  };

  it("should have a board",function(){
    var game = new TicTacToe();
    expect(!!game.board).to.equal(true);  
  });

  it("should properly take a space when asked", function () {
    var game = new TicTacToe();

    game.takeCell(0, 0);
    game.takeCell(0, 1, 'o');

    expect(game.getValueAtPosition(0, 0)).to.equal('x');
    expect(game.getValueAtPosition(0, 1)).to.equal('o');
  });

  
  it("should recognize a win", function () {
    var game = new TicTacToe();
    var winningStates = '012,345,678,036,147,258,048,642'.split(',');
    
    for (var i=0;i<winningStates.length;i++){
      for (var j=0;j<winningStates[i].length;j++){
        var coords = indexToCoords(parseInt(winningStates[i][j], 10));
        game.takeCell(coords.row, coords.column);
      }
      game.gameOver();
      expect(game.winner).to.equal('x');
      game = new TicTacToe();
    }

  });
  /*
  it("should recognize a draw", function () {
    var game = new TicTacToe();
    var cells = [
      'x','o','x',
      'o','x','o',
      'o','x','o'
    ];

    for (var row=0;row<game.board.length;row++){
      for (var col=0;col<game.board[row].length;col++){
        game.takeCell(row, col, cells.pop());    
      }
    }
    
    game.gameOver();
    expect(game.winner).to.equal('draw');
  });

  it("should take a win when the opportunity arises", function () {
    var game = new TicTacToe();
    var cells = [
      'x','x',0,
      'o','x',0,
      'o','o',0
    ];

    for (var row=0;row<game.board.length;row++){
      for (var col=0;col<game.board[row].length;col++){
        var cell = cells.shift();
        if (cell) {
          game.takeCell(row, col, cell);
        }
      }
    }
    
    game.play();
    game.gameOver();
    expect(game.winner).to.equal('x');

  });

  it("should block a win when the opportunity arises", function () {
    var game = new TicTacToe();
    var cells = [
      'o','x','o',
      'x','o',0,
      'x','o',0
    ];

    for (var row=0;row<game.board.length;row++){
      for (var col=0;col<game.board[row].length;col++){
        var cell = cells.shift();
        if (cell) {
          game.takeCell(row, col, cell);
        }
      }
    }
    
    game.play();
    game.gameOver();
    expect(game.board[2][2]).to.equal('x');

  });


  it("should take the center when the opportunity arises", function () {
    var game = new TicTacToe();
    var cells = [
       0, 0 , 0,
       0, 0 , 0,
       0, 0 , 0
    ];

    for (var row=0;row<game.board.length;row++){
      for (var col=0;col<game.board[row].length;col++){
        var cell = cells.shift();
        if (cell) {
          game.takeCell(row, col, cell);
        }
      }
    }
    
    game.play();
    game.gameOver();
    expect(game.board[1][1]).to.equal('x');

  });

  it("should take a corner when the opportunity arises", function () {
    var game = new TicTacToe();
    var cells = [
       0, 0 , 0,
       0,'o', 0,
       0, 0 , 0
    ];

    for (var row=0;row<game.board.length;row++){
      for (var col=0;col<game.board[row].length;col++){
        var cell = cells.shift();
        if (cell) {
          game.takeCell(row, col, cell);
        }
      }
    }
    
    game.play();
    game.gameOver();
    expect(game.board[0][0]).to.equal('x');

  });


  it("should just take an open spot when nothing else is available", function () {
    var game = new TicTacToe();
    var cells = [
      'x', 0 ,'o',
      'o','o','x',
      'x','x','o'
    ];

    for (var row=0;row<game.board.length;row++){
      for (var col=0;col<game.board[row].length;col++){
        var cell = cells.shift();
        if (cell) {
          game.takeCell(row, col, cell);
        }
      }
    }
    
    game.play();
    game.gameOver();
    expect(game.board[0][1]).to.equal('x');

  });
  */


});

describe("LRUCache()",function(){
  
  it("should accept new key-pairs, and remember them (for a time)",function(){
    var fish = LRUCache(3);
    fish.set("one",1);
    fish.set("two",2);
    fish.set("three",3);

    expect( fish.get("one") ).to.equal(1);
  });

  it("should forget things quickly",function(){
    var fish = LRUCache(3);
    fish.set("one",1);
    fish.set("two",2);
    fish.set("three",3);
    fish.set("four",4);
    fish.set("five",5);
    expect( fish.get("one") ).to.equal(null);
  });

  it("should limit memory loss to the limit the cache is initiated with", function(){
    var fish = LRUCache(3);
    fish.set("one",1);
    fish.set("two",2);
    fish.get("two");
    fish.get("two");
    fish.get("two");
    expect( fish.get("one") ).to.equal(1);
  });

});


describe("Heap()",function(){
  it("should store values",function(){
    var h = new Heap();
    h.add(2);
    h.add(3);
    h.add(4);
    expect( h.size() ).to.equal(3);
    expect( h.contains(3) ).to.equal(true);
  });

  it("should return false for values not stored",function(){
    var h = new Heap();
  
    for (var i=10;i<50;i++){
      h.add(i);
    }

    expect(h.contains(3) ).to.equal(false);
  });

  //need a good heap test here.

});

describe("Tree()",function(){

  var tree = new Tree("yo");
  it("should contain something added",function(){
    expect( tree.contains("yo") ).to.equal(true);
  });

  it("should not contain something not added",function(){
    expect( tree.contains("no") ).to.equal(false);
  });


});


describe("BinarySearchTree()",function(){
  var bst = BinarySearchTree(0);
  for (var i=1;i<100;i++){
    bst.insert(i);
  }

  it("should return return false when no value is found",function(){
    expect( bst.contains(1000) ).to.equal(false);
  });

  it("should return true if the tree does contain the value",function(){
    expect( bst.contains(0) ).to.equal(true);
    expect( bst.contains(99) ).to.equal(true);
    expect( bst.contains(44) ).to.equal(true);
  });

  it("should do a depth-first traversal of the tree",function(){
    var mirrorArr = [];
    bst.depthFirstLog(function(value){mirrorArr.push(value);});

    for (var i=0;i<100;i++){
      expect(mirrorArr[i]).to.equal(i);
    }

  });
  

});

describe("binarySearch()",function(){
  for (var i=0, arr = []; i<10001; arr.push(i), i++){}
  
  it("should return -1 if target is not found",function(){
    expect( binarySearch(arr,20000) ).to.equal(-1);
  });

  it("should return the index of the target", function(){
    expect( binarySearch(arr,3) ).to.equal(3);
    expect( binarySearch(arr,0) ).to.equal(0);
    expect( binarySearch(arr,10000) ).to.equal(10000);
  });
});

describe("MedianCache()",function(){

  it("should return the median", function(){
    var m = MedianCache();

    expect(m(100)).to.equal(100);
    expect(m(0)).to.equal(50);
    expect(m(50)).to.equal(50);
  });

});


describe("medianCache()",function(){
  it("should progressively return the median without a constructor",function(){
    expect(medianCache(100) ).to.equal(100);
    expect(medianCache(0) ).to.equal(50);
    expect(medianCache(50) ).to.equal(50);
  });

});

describe("Stack()",function(){
  
  it('has a functional push and pop', function(){
    var s = new Stack;
    s.push(1);
    s.push(2);
    expect(s.pop()).to.equal(2);
    expect(s.pop()).to.equal(1);
    expect(s.pop()).to.equal(undefined);
  });

  it('has a functional size property', function(){
    var s = new Stack;
    s.push(1);
    s.push(2);
    expect(s.size()).to.equal(2);
  });

});
  
describe("Queue()",function(){

  it('has a functional enqueue and dequeue', function(){
    var x = new Queue;
    x.enqueue(1);
    x.enqueue(2);
    expect( x.dequeue() ).to.equal(1);
    expect( x.dequeue() ).to.equal(2);
    expect( x.dequeue() ).to.equal(undefined);
 });

  it('has a functional size property', function(){
    var x = new Queue;
    x.enqueue(1);
    x.enqueue(2);
    expect( x.size() ).to.equal(2);
  });


});


describe("LinkedList()",function(){
  it('can accept new nodes values with addToTail()',function(){
    var x = new LinkedList;
    x.addToTail(1);
    expect(x.head.value).to.equal(1);
    x.addToTail(2);
    expect(x.head.value).to.equal(1);
  });

  it('can properly remove from head', function(){
    var x = new LinkedList;
    x.addToTail(1);
    x.addToTail(2);
    x.addToTail(3);
    expect(x.head.value).to.equal(1);

    x.removeFromHead();
    expect(x.head.value).to.equal(2);
  });

  it('has a working size method',function(){
    var x = new LinkedList;
    x.addToTail(1);
    x.addToTail(2);
    x.addToTail(3);
    expect(x.size() ).to.equal(3); 
  });

  it('has a working each method',function(){
    var x = new LinkedList;
    var m = [];

    for (var i=0;i<100;x.addToTail(i), i++){}

    x.each(function(val){m.push(val+1);});

    expect(m[0]).to.equal(1);
    expect(m[99]).to.equal(100);
  }); 

});


describe("Iou()",function(){
  //promises
  
  it('returns a function',function(){
    expect(Iou(function(val){return val;})).to.be.a('function');
  });

  it('should return an iou with then and resolve methods',function(){
    var x = new Iou(function(val){return val+1;});
    expect(x.then).to.be.a('function');
    expect(x.resolve).to.be.a('function');
  });

  it('iou.resolve() should return a value',function(){
    var x = new Iou(function(val){return val+1;});
    expect(x(12).resolve() ).to.equal(13);
  });


});
