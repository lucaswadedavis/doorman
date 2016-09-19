(function(){
  
  var branchingStrings;
  // Find all possible strings where ? could be a 0 or a 1:

  const sample = '0??1'

  //console.log(branchingStrings(sample).join(' ') + ' should equal 0111 0101 0011 0001');

  function branchingStrings(sample) {
      let arr = [];
      function walk (head, tail) {
          if (tail === '') {
              arr.push(head);  
              return;
          }
          if (tail[0] === '?') {
              walk(head + '1', tail.slice(1));
              walk(head + '0', tail.slice(1));
          } else {
              walk(head + tail[0], tail.slice(1));
          }
      }
      
      walk('', sample);
      return arr;
  }

  var root = this;

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = branchingStrings;
    }
    exports.branchingStrings = branchingStrings;
  } else {
    root.branchingStrings = branchingStrings;
  }

})();
