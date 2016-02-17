(function(){
  var merge = function (left, right) {
    var result  = [];
    var li = 0;
    var ri = 0;

    while (li < left.length && ri < right.length) {
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

  var mergeSort = function (items) {
    if (items.length < 2) return items;

    var middleIndex = Math.floor(items.length / 2);
    var left = items.slice(0, middleIndex);
    var right = items.slice(middleIndex);

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
