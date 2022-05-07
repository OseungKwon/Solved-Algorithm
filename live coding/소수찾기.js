// 에라토스테네스의 체로 소수찾기
// 1. ex) 1부터 100까지 소수찾기

const n = 100;

const prime = Array.from({ length: n + 1 }, () => true);

for (let i = 2; i < prime.length; i++) {
  if (prime[i]) {
    for (let j = i * i; j <= prime.length; j += i) {
      prime[j] = false;
    }
  }
}

console.log(prime);
