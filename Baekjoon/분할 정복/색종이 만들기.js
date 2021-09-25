const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const n = +input[0];
const paper = input.slice(1).map(v => v.split(" ").map(vv => +vv));
let paper_count = [0, 0]
function cut(n, x, y) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            count += paper[x + i][y + j]
        }
    }
    if (count === n * n) {
        paper_count[1]++;
    } else if (count === 0) {
        paper_count[0]++;
    } else {
        n = n / 2;
        cut(n, x, y);
        cut(n, x + n, y);
        cut(n, x, y + n);
        cut(n, x + n, y + n);
    }
}
cut(n, 0, 0)
paper_count.map(cnt => console.log(cnt))