(function(){

    function permutations(str) {
        return walk([], str.split(''), []);
    }

    function walk(stack, data, acc) {
        if (!data.length) return acc.push(stack.slice().join(''));

        for (var i = 0; i < data.length; i++) {
            stack.push(data.splice(i, 1));
            walk(stack, data, acc);
            data.splice(i, 0, stack.pop());
        }

        return acc;
    }

    var root = this;

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = permutations;
        }
        exports.permutations = permutations;
    } else {
        root.permutations = permutations;
    }

})();
