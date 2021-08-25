let DFS = function (num) {
	visitedDfs[num] = true;
	dfsResult.push(num);

	for (let i = 1; i < graph.length; i++) {
		if (graph[num][i] === 1 && visitedDfs[i] === false) {
			DFS(i);
		}
  }
  return;
};

let BFS = function (num) {
	let queue = [];
	queue.push(num);
	bfsResult.push(num);

  while (queue.length !== 0) {
    let shiftQueue = queue.shift()
    visitedBfs[shiftQueue] = true;
    
    for (let i = 1; i < graph.length; i++) {
      if (graph[shiftQueue][i] === 1 && visitedBfs[i] === false) {
        visitedBfs[i] = true;
        queue.push(i);
        bfsResult.push(i);
      }
    }
  }
  return;
};

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
let graph = [];
let visitedDfs = [];
let visitedBfs = [];
let dfsResult = [];
let bfsResult = [];

rl.on("line", function (line) {
	input.push(line.toString());
}).on("close", function () {
	let [node, edge, num] = input
		.shift()
		.split(" ")
		.map((el) => Number(el));
	graph = Array.from(Array(node + 1), () => Array(node + 1).fill(0));

	for (let i of input) {
		let [x, y] = i.split(" ").map((el) => Number(el));
		graph[x][y] = 1;
		graph[y][x] = 1;
	}

	visitedDfs = new Array(node + 1).fill(false);
	visitedBfs = new Array(node + 1).fill(false);
	DFS(num);
	BFS(num);

	console.log(dfsResult.join(" ") + "\n" + bfsResult.join(" "));
	process.exit();
});