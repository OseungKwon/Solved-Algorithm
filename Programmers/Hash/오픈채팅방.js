function solution(record) {
  var answer = [];
  const user = new Map();

  record = record.map((el) => el.split(" "));

  record.map((el) => {
    if (el[0] === "Enter" || el[0] === "Change") user.set(el[1], el[2]);
  });

  console.log(user);

  record.map((el) => {
    if (el[0] === "Enter") {
      answer.push(`${user.get(el[1])}님이 들어왔습니다.`);
    } else if (el[0] === "Leave") {
      answer.push(`${user.get(el[1])}님이 나갔습니다.`);
    }
  });

  return answer;
}
