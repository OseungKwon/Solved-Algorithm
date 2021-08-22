// DFS로 풀기
function solution(n, computers) {
  let answer = 0;
  // computers의 길이만큼 false로 초기화된 배열 생성
  let visited = new Array(computers.length).fill(false);

  // DFS
  const dfs = (graph, computer, visited) => {
    visited[computer] = true;
    // 그래프 탐색
    graph.forEach((_, index) => {
      // 자신의 index는 제외
      if (index !== computer) {
        // visited 상태가 false이고, 1을 가진 경우,
        if (!visited[index] && graph[computer][index] === 1) {
          dfs(graph, index, visited);
        }
      }
    });
  };
  // 한 번의 트리 순회를 끝마치고, 방문하지 않은 node를 찾아 다시 트리 순회함
  visited.map((state, index) => {
    if (state === false) {
      answer++;
      dfs(computers, index, visited);
    }
  });
  return answer;
}
