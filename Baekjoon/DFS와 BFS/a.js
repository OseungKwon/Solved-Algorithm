const sol = (input) => {
    const [n, k] = input.split(" ").map(Number);
    const visit = new Array(100001).fill(0);

    function BFS(n) {
        const queue = [];
        queue.push([n, 0]);
        visit[n] = 1;
        while (queue.length) {
            const [dot, time] = queue.shift();
            if (dot === k) return time;
            for (next of [dot - 1, dot + 1, dot * 2]) {
                if (!visit[next] && next >= 0 && next <= 100000) {
                    visit[next] = 1;
                    queue.push([next, time + 1]);
                }
            }
        }
    }
    return BFS(n);
};
require("readline")
    .createInterface(process.stdin, process.stdout)
    .on("line", (line) => {
        console.log(sol(line));
    })
    .on("close", () => {
        process.exit();
    })