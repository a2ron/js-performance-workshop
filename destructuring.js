'use strict';

let foo = [1, 2, 3];


exports.compare = {
    'classic': function () {
        let a = foo[1];
        let b = foo[2];
        let c = foo[0];
    },
    'destruct': function () {
        let [a, b, c] = foo;

    }
};

require('bench').runMain();
