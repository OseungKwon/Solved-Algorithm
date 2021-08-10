let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let n = parseInt(input[0]);

const answer = (n) => {
    let arr = new Array(n + 1);
    for (let i = 0; i < n + 1; ++i) {
        if (i === 1) {
            arr[i] = new Array(10).fill(1)
        } else {
            arr[i] = new Array(10).fill(0)
        }
    }
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < 10; j++) {
            if (j > 0) arr[i + 1][j - 1] = (arr[i + 1][j - 1] + arr[i][j]) % 1000000000
            if (j < 9) arr[i + 1][j + 1] = (arr[i + 1][j + 1] + arr[i][j]) % 1000000000
        }
    }
    return (arr[n].reduce((acc, cur) => acc + cur) - arr[n][0]) % 1000000000
}
console.log(answer(n))