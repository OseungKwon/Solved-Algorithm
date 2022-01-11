function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    answer.push(
      array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)[
        commands[i][2] - 1
      ]
    );
  }
  return answer;
}
//https://velog.io/@wkahd01/프로그래머스-정렬-문제풀이
