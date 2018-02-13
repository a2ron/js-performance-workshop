'use strict';

function Player(name, points) {
    this.name = name;
    this.points = points;
}

function Player2(name, points, mana) {
    this.name = name;
    this.points = points;
    this.mana = mana;
}

exports.compare = {
    'hidden': function () {
        for (let i = 0; i < 100000; ++i) {
            new Player('eaf', 23)
            let a = new Player('asdf', 41)
            a.mana = 8;
        }
    },
    'no-extra': function () {
        for (let i = 0; i < 100000; ++i) {
            new Player2('gra', 42)
            let a = new Player2('g3q', 13,2)
        }
    }
};

require('bench').runMain();
