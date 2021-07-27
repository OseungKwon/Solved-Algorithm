function solution(priorities, location) {
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
}