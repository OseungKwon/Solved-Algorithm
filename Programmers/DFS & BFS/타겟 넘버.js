function solution(numbers, target) {
  let answer = 0;
  const len = numbers.length;
  const dfs = (depth, sum) => {
    if (depth === len) {
      sum === target && answer++;
      return;
    }
    dfs(depth + 1, sum + numbers[depth]);
    dfs(depth + 1, sum - numbers[depth]);
  };
  dfs(0, 0);
  return answer;
}
