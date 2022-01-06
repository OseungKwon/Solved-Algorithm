/*function solution(priorities, location) {
    let answer = 0;
    let prioArr = []
    priorities.forEach((t, i) => {
        prioArr.push({ index: i, priority: t })
    })

    while (prioArr.length > 0) {
        let temp = prioArr.shift();
        if (prioArr.find(p => p.priority > temp.priority)) {
            prioArr.push(temp)
        } else {
            answer++;
            if (temp.index === location) {
                return answer;
            }
        }
    }
}*/
function solution(priorities, location) {
  let answer = 0;
  let queue = [];
  priorities.forEach((t, i) => {
    queue.push({ index: i, priority: t });
  });

  while (queue.length > 0) {
    let docx = queue.shift();
    if (queue.find((p) => p.priority > docx.priority)) {
      queue.push(docx);
    } else {
      answer++;
      if (docx.index === location) {
        return answer;
      }
    }
  }
}
