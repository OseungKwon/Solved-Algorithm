// var arr = [['R', 'R', 'R', 'B', 'B'], ['G', 'G', 'B', 'B', 'B'], ['B', 'B', 'B', 'R', 'R'], ['B', 'B', 'R', 'R', 'R'], ['R', 'R', 'R', 'R', 'R']]
// var n = 5;
// arr 요소만큼 visited 생성
const arr = []
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
BBBBG
GRBBB
BBBBB
BBBBB
RRRRR
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();
let t = input();
var n = t;
while (t--) {
    arr.push(input().split(''))
}
//console.log(n, arr)


var dx = [-1, 1, 0, 0]
var dy = [0, 0, -1, 1]

function DFS(arr, x, y) {
    visited[y][x] = true;
    //console.log(y, x, arr[y][x], answer)
    for (let k = 0; k < 4; k++) {
        var nx = x + dx[k]
        var ny = y + dy[k]

        if (nx < 0 || ny < 0 || nx >= n || ny >= n) {
            continue;
        }
        //console.log(...visited)
        if (arr[ny][nx] === arr[y][x] && !visited[ny][nx]) {
            //console.log('n', nx, ny, arr[ny][nx])
            DFS(arr, nx, ny)
        }
    }
}

for (let k = 0; k < 2; k++) {
    var visited = [];
    for (let i = 0; i < n; i++) {
        visited.push(new Array(arr.length).fill(false))
    }
    //console.log(visited)

    var answer = 0;
    if (k === 1) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (arr[j][i] === 'G') {
                    arr[j][i] = 'R'
                }
            }
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (visited[j][i] === false) {
                answer++;
                //console.log(...visited)
                DFS(arr, i, j)
            }
        }

    }
    console.log(answer)
}

