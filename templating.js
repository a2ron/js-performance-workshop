'use strict';
let name = 'a2ron';

exports.compare = {
    'ec6 literals': function () {
        let a = `hello ${name}`
    },
    'classic': function () {
        let a = 'hello ' + name

    }
};

require('bench').runMain();
