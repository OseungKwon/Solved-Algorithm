function solution(s) {
  var answer = [];

  if (s.length === 1) return 1;

  for (let i = 1; i <= s.length / 2; i++) {
    let compress = [];
    let idx = 0;
    let temp = "";
    let cnt = 1;
    while (i * idx < s.length) {
      let word = s.slice(i * idx, i * idx + i);
      if (word === temp) {
        cnt++;
      } else {
        if (temp !== "") {
          cnt === 1 ? compress.push(temp) : compress.push(cnt + temp);
        }
        temp = word;
        cnt = 1;
      }
      idx++;
    }
    if (temp !== "") {
      cnt === 1 ? compress.push(temp) : compress.push(cnt + temp);
    }
    answer.push(compress.join(""));
  }

  return answer.sort((a, b) => a.length - b.length)[0].length;
}
