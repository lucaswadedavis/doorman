(function(){

    function combinations(str) {
        return walk('', str, []);

        function walk(beginning, end, acc) {
            if (!beginning.length && !end.length) return;
            if (!end.length) return acc.push(beginning);

            walk(beginning, end.slice(1), acc);
            walk(beginning + end[0], end.slice(1), acc);

            return acc;
        }
    }

    var root = this;

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = combinations;
        }
        exports.combinations = combinations;
    } else {
        root.combinations = combinations;
    }

})();
