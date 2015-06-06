(function(){
  
  var root = this;

  var binarySearch = function(arr,target){
    var index = Math.floor(arr.length/2);
    var upperBound = arr.length;
    var lowerBound = 0;
    var count = 0;

    do{
      count ++;
      console.log(arr[index], target);
      console.log(index,upperBound,lowerBound);
      if (arr[index] === target) {
        break;
      }

      if (target > arr[index]){
        // move the lowerBound
        lowerBound = index+1;
        index = Math.floor( (upperBound+lowerBound) /2);
      } else {
        // move the upperBound
        upperBound = index;
        index = Math.floor( (upperBound+lowerBound) /2);
      }
    } while (arr[index] !== target && upperBound !== lowerBound && count < 100)
  
    // return the index of the target or -1
    return (arr[index] !== target && upperBound === lowerBound) ? -1 : index;
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = binarySearch;
    }
    exports.binarySearch = binarySearch;
  } else {
    root.binarySearch = binarySearch;
  }

})();
