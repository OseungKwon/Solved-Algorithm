// bfs 문제

// ex1)
// maps: [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]
// answer: 11

// ex2)
// maps: [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]
// answer: -1

// sample: https://programmers.co.kr/learn/courses/30/lessons/1844

const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1]
];

const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

const queue = [[0, 0]];
while (queue.length) {
  const [x, y] = queue.shift();
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= 0 && nx < maps[0].length && ny >= 0 && ny < maps.length) {
      if (maps[nx][ny] === 1 && !(nx === 0 && ny === 0)) {
        maps[nx][ny] += maps[x][y];
        queue.push([nx, ny]);
      }
    }
  }
}

console.log(maps[maps.length - 1][maps[0].length - 1]);
