(function(){
  var merge = function (left, right) {
    var result = [];
    var li = 0;
    var ri = 0;

    while (ri < right.length && li < left.length) {
      if (left[li] < right[ri]) {
        result.push(left[li++]);
      } else {
        result.push(right[ri++]);
      }
    }

    return result
      .concat(left.slice(li))
      .concat(right.slice(ri));
  };
  
  var mergeSort = function (list) {
    if (list.length < 2) return list;

    var middle = Math.floor(list.length / 2);
    var left = list.slice(0, middle);
    var right = list.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  };

  var root = this;

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = mergeSort;
    }
    exports.mergeSort = mergeSort;
  } else {
    root.mergeSort = mergeSort;
  }

})();