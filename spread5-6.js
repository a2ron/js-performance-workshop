'use strict';

function f1(x, y = 7, z = 42) {
    let ret = [1];
    ret.push([1, 2, 3])
    return ret;

}

function f2(x, y, z) {
    return [1, ... [1, 2, 3]]
}

exports.compare = {
    'es5': function () {
        f1()[3]
    },
    'es6': function () {
        f2()[3]

    }
};

require('bench').runMain();
