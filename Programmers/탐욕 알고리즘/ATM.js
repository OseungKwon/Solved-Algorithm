let arr = []
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
3 1 4 3 2
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();
input();
input().trim().split(' ').map(t => arr.push(Number(t)))
//console.log('arr', arr)

let sorted = arr.sort((a, b) => a - b)
//console.log(sorted)
sorted.reduce((acc, cur, i) => sorted[i] = acc + cur)
const result = sorted.reduce((acc, cur) => acc + cur)
console.log(result)
