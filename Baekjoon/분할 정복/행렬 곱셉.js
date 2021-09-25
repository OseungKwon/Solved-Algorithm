const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on('line', (line) => {
    // 입력 관리
    input.push(line.split(' ').map((el) => parseInt(el)));
}).on('close', () => {
    // 구현
    const N = input[0][0];
    const M = input[N + 1][0];
    const K = input[N + 1][1];

    const A = [];
    const B = [];

    for (i = 1; i <= N; i++) {
        A.push(input[i]);
    }

    for (i = N + 2; i <= N + M + 1; i++) {
        B.push(input[i]);
    }

    for (let i = 0; i < N; i++) {
        let result = []
        for (let j = 0; j < K; j++) {
            let sum = []
            for (let k = 0; k < M; k++) {
                sum.push(A[i][k] * B[k][j])
            }
            result.push(sum.reduce((acc, cur) => acc + cur))
        }
        console.log(result.join(" "))
    }
    process.exit();
});
