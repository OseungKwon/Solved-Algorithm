// 1003번 [피보나치 함수]
//const fs = require("fs");
//const n = fs.readFileSync("/dev/stdin");
function fibo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo);
    return memo[n];
}
//입력
var n = 5;
console.log(fibo(n));