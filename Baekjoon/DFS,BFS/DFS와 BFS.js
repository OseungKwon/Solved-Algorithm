var arr = [
  [5, 4],
  [5, 2],
  [1, 2],
  [3, 4],
  [3, 1]
];
var graph = new Map();
/*
arr.forEach(a=>{
  if(graph.get(a[0])){
    if(typeof(graph.get(a[0]))==='number'){
      graph.set(a[0],[graph.get(a[0]),a[1]])
    }else{
      graph.set(a[0],[...graph.get(a[0]),a[1]])
    }
  }else{
    graph.set(a[0],a[1])
  }
})
*/
var start = 3;

arr.forEach((a) => {
  if (graph.get(a[0])) {
    graph.set(a[0], [...graph.get(a[0]), a[1]]);
  } else {
    graph.set(a[0], [a[1]]);
  }
  if (graph.get(a[1])) {
    graph.set(a[1], [...graph.get(a[1]), a[0]]);
  } else {
    graph.set(a[1], [a[0]]);
  }
});

console.log("g", graph);

//BFS

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
console.log(BFS(graph, start));

//BFS

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
console.log(DFS(graph, start));
