'use strict';

const obj = {
    a: 'a',
    b: 'b',
    c: 'c',
}

exports.compare = {
    'assign': function () {
        for (let i = 0; i < 10000; ++i) {
            const copy = Object.assign({}, obj);
        }
    },
    'oldCopy': function () {
        for (let i = 0; i < 10000; ++i) {
            const copy = JSON.parse(JSON.stringify(obj))
        }
    }
};

require('bench').runMain();
