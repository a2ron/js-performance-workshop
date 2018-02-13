'use strict';
const FILTER_YEAR = 1984;

const games = [
    {name: "A", score: 1993},
    {name: "A", score: 1932},
    {name: "A", score: 1995},
    {name: "A", score: 2001},
    {name: "A", score: 1973},
];

function testA() {

    let acu = 0;
    for (let i = 0; i < games.length; ++i) {
        acu += games[i].score;
    }
}

function testB() {
    let acu = games.reduce((acu, g) => g.year <= FILTER_YEAR, 0);
}

exports.compare = {
    'for': function () {
        testA();
    },
    'reduce': function () {
        testB();
    }
};

require('bench').runMain();
