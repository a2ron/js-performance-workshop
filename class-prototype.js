'use strict';
const FILTER_YEAR = 1984;

class Shape {
    constructor(id, x, y) {
        this.id = id;
        this.move(x, y);
    }

    move(x, y) {
        this.x = x;
        this.y = y;
    }
}

let Rectangle = function (id, x, y) {
    this.id = id;
    this.move(x, y);
};

Rectangle.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
};

exports.compare = {
    'class': function () {
        for (let i = 0; i < 1000; ++i) {
            new Shape('test', 1, 2);
        }
    },
    'prototype': function () {
        for (let i = 0; i < 1000; ++i) {
            new Rectangle('test', 1, 2);
        }
    }
};

require('bench').runMain();
