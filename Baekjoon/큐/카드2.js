var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var N = parseInt(input[0]);

function result(N) {
    var cards = [];
    for (var i = 1; i <= N; i++) {
        cards.push(i)
    }
    while (cards.length !== 1) {
        cards.shift();
        cards.push(cards.shift());
    }
    return cards[0]
}
cosole.log(result(N))