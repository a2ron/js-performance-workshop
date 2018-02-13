'use strict';

const games = [
    {name: "A", year: 2001},
    {name: "A", year: 2001},
    {name: "A", year: 2001},
    {name: "A", year: 2001},
    {name: "A", year: 2001},
];

function testA() {
    let names = [];
    for (let i = 0; i < games.length; ++i) {
        names.push(games[i].name);
    }
}

function testB() {
    let names = games.map(g => g.name);
}

exports.compare = {
    'for': function () {
        testA();
    },
    'map': function () {
        testB();
    }
};

require('bench').runMain();
