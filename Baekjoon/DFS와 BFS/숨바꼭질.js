const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 17`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();
let [a, b] = input().trim().split(' ');

var n = Number(a);
var k = Number(b);
var visited = new Array(100001).fill(false)

function BFS(n) {

    //console.log(n)
    var queue = []
    queue.push([n, 0])
    visited[n] = true;
    while (queue.length) {
        var [dot, cnt] = queue.shift();
        //console.log(dot)

        if (dot === k)
            return cnt;
        for (next of [dot - 1, dot + 1, dot * 2]) {
            if (!visited[next] && next >= 0 && next <= 100000) {
                visited[next] = true;
                queue.push([next, cnt + 1])
            }
        }
    }

}
console.log(BFS(5))