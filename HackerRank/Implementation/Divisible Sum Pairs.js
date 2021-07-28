function divisibleSumPairs(n, k, ar) {
    let answer = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= n; j++) {
            (ar[i] + ar[i + j]) % k === 0 && answer++;
        }
    }
    return answer;
}