'use strict';
let name = 'a2ron';

let a, b, c, d, e;
a = [1, 2, 3]
b = "dog"
c = [42, "cat"]
exports.compare = {
    'concat': function () {
        d = a.concat(b, c);
    },
    'spread': function () {
        e = [...a, b, ...c]

    }
};

require('bench').runMain();
