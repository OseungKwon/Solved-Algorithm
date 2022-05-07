const graph = [[], [2, 3], [1, 4, 5], [1, 6], [2], [2], [3]];
const visited = new Array(graph.length).fill(false);

function DFS(node, graph, visited) {
  visited[node] = true;
  console.log(node);
  graph[node].map((el) => {
    !visited[el] && DFS(el, graph, visited);
  });
}

DFS(1, graph, visited);

// DFS는 깊이 우선 탐색으로, stack과 재귀를 사용해 풀 수 있음.
// 재귀 말고 stack으로도 풀 수 있는 방법
