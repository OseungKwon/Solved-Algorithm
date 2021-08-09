var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);

var result = (num) => {
    var memo = [0, 0, 0, 1, 0, 1]
    for (var i = 6; i <= num; i++) {
        if (i < 15) {
            memo[i] = Math.max(memo[i - 3] !== 0 && memo[i - 3] + 1, memo[i - 5] !== 0 && memo[i - 5] + 1)
        } else {
            memo[i] = Math.min(memo[i - 3] + 1, memo[i - 5] + 1)
        }
    }
    if (memo[num] === 0) {
        return -1;
    }
    return memo[num]

}
console.log(result(a))