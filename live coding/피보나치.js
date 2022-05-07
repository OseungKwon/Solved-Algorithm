// 참고 https://velog.io/@sud665/피보나치수열의-고찰

// 재귀
function fibo(n) {
  if (n < 2) return n;
  return fibo(n - 2) + fibo(n - 1);
}
console.log(fibo(5));

// DP - Top Down
function fibo(n, memo = []) {
  if (memo[n]) return memo[n];
  if (n === 0) return 0;
  if (n < 3) return 1;
  memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo);

  return memo[n];
}
console.log(fibo(5));

// DP - Bottom Up
function fibo(n) {
  if (n <= 2) return 1;
  let memo = [0, 1];
  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
}
console.log(fibo(5));

// closure 1

function fibonaci() {
  let [num1, num2] = [0, 1];

  return function () {
    const result = num1;
    [num1, num2] = [num2, num1 + num2];
    return result;
  };
}
let ff = fibonaci();
console.log(ff());

// performance.now();

// closure 2
function fibofibo() {
  let count = 0;
  const fibonacci = function (n) {
    if (n < 2) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };
  return function () {
    count++;
    return fibonacci(count - 1);
  };
}
let fibox = fibofibo();
console.log(fibox());
