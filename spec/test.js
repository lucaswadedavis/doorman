try {
  var chai = require('chai');
  var expect = chai.expect;
} catch (err){
  
}

describe("Stack()",function(){
  it("exists",function(){
    expect(Stack).to.be.a('function');
  });
  
  it('returns an object',function(){
    expect( new Stack() ).to.be.an('object');
  });

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
