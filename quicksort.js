(function(){

    function quicksort(arr, li=0, ri=(arr.length - 1)) {
        var mi = partition(arr, li, ri);

        if (li < mi - 1) quicksort(arr, li, mi - 1);
        if (ri > mi) quicksort(arr, mi, ri);

        return arr;
    }

    function partition(arr, li, ri) {
        var pivot = arr[(li + ri) >> 1];

        while(li <= ri) {
            while(arr[li] < pivot) li++;
            while(arr[ri] > pivot) ri--;

            if (li <= ri) swap(arr, li++, ri--);
        }

        return li;
    }

    function swqp(arr, li, ri) {
        [arr[li], arr[ri]] = [arr[ri], arr[li]];
    }

    var root = this;

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = quicksort;
        }
        exports.quicksort = quicksort;
    } else {
        root.quicksort = quicksort;
    }

})();
