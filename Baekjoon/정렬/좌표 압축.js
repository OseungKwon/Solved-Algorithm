let arr = []
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const n = +stdin[0];
stdin[1] = stdin[1].split(" ").map((v) => +v);
arr = [...stdin[1]];
for (let i = 0; i < arr.length; i++) {
    arr[i] = [arr[i], i]
}

let result = []
arr.sort((a, b) => a[0] - b[0])
//console.log(...arr)
let index = 0;
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][0] === arr[i + 1][0]) {
        result.push([index, arr[i][1]])
    } else {
        result.push([index++, arr[i][1]])
    }
}
result.push([index++, arr[arr.length - 1][1]])
result.sort((a, b) => a[1] - b[1])
let k = []
result.map(item => k.push(item[0]))
console.log(k.join(' '))