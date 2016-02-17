(function(){

  var binarySearch = function (arr, target) {
    var middle = Math.floor(arr.length / 2);
    var lower = 0;
    var upper = arr.length;

    while (upper !== lower && arr[middle] !== target) {
      (target > arr[middle]) ? lower = middle + 1 : upper = middle;
      middle = Math.floor((upper + lower) /2);
    }

    return (upper === lower && arr[middle] !== target) ? -1 : middle;
  };

  /*
  var binarySearch = function (arr, target) {
    var middle = Math.floor(arr.length / 2);
    var lower = 0;
    var upper = arr.length;

    while (arr[middle] !== target && lower !==upper) {
      (arr[middle] < target) ? lower = middle + 1 : upper = middle;
      middle = Math.floor((upper + lower) / 2);
    }

    return (arr[middle] !== target && lower === upper) ? -1 : middle;
  };
  */

  /*
  var binarySearch = function (list, target) {
    var middle = Math.floor(list.length / 2);
    var upper = list.length;
    var lower = 0;

    while (list[middle] !== target && upper !== lower) {
      if (target > list[middle]) {
        lower = middle + 1;
      } else {
        upper = middle;
      }

      middle = Math.floor((upper + lower) / 2);
    }

    return (list[middle] !== target && upper === lower) ? -1 : middle;
  };
  */

  /*
  var binarySearch = function (arr, target) {
    var middle = Math.floor(arr.length/2);
    var upper = arr.length;
    var lower = 0;

    do {
      if (arr[middle] === target) break;

      if (target > arr[middle]){
        lower = middle+1;
      } else {
        upper = middle;
      }
      middle = Math.floor((upper + lower) / 2);
    } while (arr[middle] !== target && upper !== lower)
  
    return (arr[middle] !== target && upper === lower) ? -1 : middle;
  };
  */

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
