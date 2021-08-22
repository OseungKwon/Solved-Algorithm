// BFS
function solution(n, computers) {
  let answer = 0;
  let visited = new Array(computers.length).fill(false);
  let queue = [];
  const BFS = (computers, visited) => {
    visited.forEach((state, index) => {
      // 순회 끊기면 여기서 다시 false값을 찾아 다시 돌린다.
      if (state === false) {
        queue.push(index);
        visited[index] = true;
        answer++;
        // BFS 순회
        while (queue.length !== 0) {
          // BFS는 shift 사용
          let node = queue.shift();
          computers[node].forEach((_, index) => {
            if (index !== node) {
              if (!visited[index] && computers[node][index] === 1) {
                visited[index] = true;
                queue.push(index);
              }
            }
          });
        }
      }
    });
  };
  BFS(computers, visited);
  return answer;
}
