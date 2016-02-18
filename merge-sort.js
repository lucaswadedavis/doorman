(function(){
  
  var merge = function (left, right) {
    var res = [];
    var li = 0;
    var ri = 0;

    while (li < left.length && ri < right.length) {
      res.push(left[li] < right[ri] ? left[li++] : right[ri++]);
    }

    return res.concat( left.slice(li) ).concat( right.slice(ri) );
  };

  var mergeSort = function (list) {
    if (list.length < 2) return list;

    var middle = Math.floor(list.length / 2);
    var left = list.slice(0, middle);
    var right = list.slice(middle);

    return merge( mergeSort(left), mergeSort(right));
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
