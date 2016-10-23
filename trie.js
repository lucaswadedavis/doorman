(function(){

    function Trie() {
        var root = new Node('');

        this.addWord = function(word) {
            var node = root;
            for (var i = 0; i < word.length; i++) {
                if (!node.children[word[i]]) {
                    node.children[word[i]] = new Node(word[i]);
                }
                node = node.children[word[i]];
            }
            node.terminator = true;
        }

        this.getWordsForPrefix = function(prefix) {
            return walk(root, [], prefix, []);

            function walk(node, stack, prefix, res) {
                stack.push(node.value);
                if (node.terminator) res.push(stack.slice().join(''));

                if (node.children[prefix[0]]) {
                    walk(node.children[prefix[0]], stack, prefix.slice(1), res);
                }

                if (!prefix.length) {
                    for (var key in node.children) {
                        walk(node.children[key], stack.slice(), '', res);
                    }
                }

                return res;
            }
        }
    }

    function Node(value) {
        this.value = value;
        this.terminator = false;
        this.children = {}
    }

    var root = this;

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = Trie;
        }
        exports.Trie = Trie;
    } else {
        root.Trie = Trie;
    }

})();
