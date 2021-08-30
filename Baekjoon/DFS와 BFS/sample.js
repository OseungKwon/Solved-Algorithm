const a = []
const fs = require('fs');
const stdin = `5
RRRBB
GGBBB
BBBRR
BBRRR
RRRRR
`.split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();
<<<<<<< HEAD
let t = input();
while (t--) {
  a.push(input().split(''))
=======

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

  function BFS(graph, start) {
    var front = [];
    var back = [];

    front.push(start);
    while (front.length !== 0) {
      var node = front.pop();
      if (!back.includes(node)) {
        back.push(node);
        front = [...front, ...graph.get(node).sort((a, b) => b - a)];
      }
    }
    return back;
  }
  console.log(...BFS(graph, start));

  function DFS(graph, start) {
    var front = [];
    var back = [];

    front.push(start);
    while (front.length !== 0) {
      var node = front.shift();
      if (!back.includes(node)) {
        back.push(node);
        front = [...front, ...graph.get(node).sort((a, b) => a - b)];
      }
    }
    return back;
  }
  console.log(...DFS(graph, start));
>>>>>>> a737b22020e66735ba9a8029e69de5cab6ed9b5f
}
console.log(a)
