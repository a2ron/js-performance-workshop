'use strict';
const mul = 10000;
const LITE_SIZE = 4*mul;
const MEDIUM_SIZE = 8*mul;
const LARGE_SIZE = 16*mul;

let lite = Array.from({length: LITE_SIZE}, () => Math.floor(Math.random() * LITE_SIZE));
let medium = Array.from({length: MEDIUM_SIZE}, () => Math.floor(Math.random() * MEDIUM_SIZE));
let large = Array.from({length: LARGE_SIZE}, () => Math.floor(Math.random() * LARGE_SIZE));


function testA() {
    lite.forEach(e => {
        e + 1;
    })
    medium.forEach(e => {
        e + 1;
    })
    large.forEach(e => {
        e + 1;
    })
}

function testB() {
    for (let i = 0; i < lite.length; ++i) {
        lite[i] + 1;
    }
    for (let i = 0; i < medium.length; ++i) {
        medium[i] + 1;
    }
    for (let i = 0; i < large.length; ++i) {
        large[i] + 1;
    }
}

exports.compare = {
    'foreach': function () {
        testA();
    },
    'for': function () {
        testB();
    }
};

require('bench').runMain();
