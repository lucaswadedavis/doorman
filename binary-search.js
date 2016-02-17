(function(){
  
  var binarySearch = function (arr, target) {
    var middle = Math.floor(arr.length / 2);
    var upper = arr.length;
    var lower = 0;

    while (lower !== upper && arr[middle] !== target) {
      (target > arr[middle]) ? lower = middle + 1 : upper = middle;
      middle = Math.floor((upper + lower) / 2);
    }

    return (lower === upper && arr[middle] !== target) ? -1 : middle;
  };

  var root = this;

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = binarySearch;
    }
    exports.binarySearch = binarySearch;
  } else {
    root.binarySearch = binarySearch;
  }

})();
