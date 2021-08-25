const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4 5 1
1 2
1 3
1 4
2 4
3 4
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let [len, limit, start] = input().split(" ").map(Number);

if (limit === 0) {
  console.log(1);
  console.log(1);
} else {
  var graph = new Map();
  while (limit--) {
    const data = input().split(" ").map(Number);
    if (graph.get(data[0])) {
      graph.set(data[0], [...graph.get(data[0]), data[1]]);
    } else {
      graph.set(data[0], [data[1]]);
    }
    if (graph.get(data[1])) {
      graph.set(data[1], [...graph.get(data[1]), data[0]]);
    } else {
      graph.set(data[1], [data[0]]);
    }
  }
}
console.log(graph);
console.log(graph.size);
const visited = new Array(graph.size).fill(false);
console.log(visited);
function DFS(graph, visited) {}
