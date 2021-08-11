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
// 오랜만에 다시 풂 2트
function solution(priorities, location) {
    let answer = 0;
    let max = [...priorities];
    max = max.sort((a, b) => b - a)

    let prioArr = []
    priorities.forEach((t, i) => {
        prioArr.push({ index: i, priority: t })
    })

    while (prioArr.length > 0) {
        if (prioArr[0].priority === max[0]) {
            answer++;
            if (prioArr[0].index === location) {
                return answer;
            }
            prioArr.shift();
            max.shift();
        } else {
            prioArr.push(prioArr.shift())
        }
    }

    return answer;
}