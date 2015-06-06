describe("breadthFirstSearch()",function(){
  var t = {value: 10, children : []};
  var cb = function(val){return (val>0 && val<3);};
  var bfs = breadthFirstSearch;

  it("should return null if nothing passes the test",function(){
    expect( bfs(t,cb) ).to.equal(null);
  });

  it("should return an array of values that pass the test",function(){
    expect( bfs(t,cb) ).to.include.members([1,2]);
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
