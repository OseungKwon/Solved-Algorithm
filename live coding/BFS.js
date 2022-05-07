const graph = [[], [2, 3], [1, 4, 5], [1, 6], [2], [2], [3]];
const visited = new Array(graph.length).fill(false);

function BFS(node, graph, visited) {
  const queue = [node];
  visited[node] = true;
  while (queue.length) {
    let temp = queue.shift();
    console.log(temp);

    graph[temp].map((el) => {
      if (!visited[el]) {
        queue.push(el);
        visited[el] = true;
      }
    });
  }
}

BFS(1, graph, visited);

// bfs는 너비 우선 탐색으로, queue 사용
