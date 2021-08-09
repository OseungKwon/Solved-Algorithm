let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let num = parseInt(input[0]);

const result = (num) => {
    let memo = [0, 1, 2]
    for (let i = 3; i <= num; i++) {
        memo[i] = memo[i - 1] + memo[i - 2]
        memo[i] %= 15746
    }
    return memo[num]
}

console.log(result(num))