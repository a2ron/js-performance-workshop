'use strict';
const FILTER_YEAR = 1984;

const games = [
    {name: "A", year: 1993},
    {name: "A", year: 1932},
    {name: "A", year: 1995},
    {name: "A", year: 2001},
    {name: "A", year: 1973},
];

function testA() {
    let names = [];
    for (let i = 0; i < games.length; ++i) {
        if (games[i].year <= FILTER_YEAR)
            names.push(games[i].name);
    }
}

function testB() {
    let names = games.filter(g => g.year <= FILTER_YEAR);
}

exports.compare = {
    'for': function () {
        testA();
    },
    'filter': function () {
        testB();
    }
};

require('bench').runMain();
