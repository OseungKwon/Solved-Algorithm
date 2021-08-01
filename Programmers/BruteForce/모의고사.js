/* 1트
function solution(answers) {
    var answer = [[1, 0], [2, 0], [3, 0]];
    var students = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    var count = 0;
    answers.map((t, index) => {
        for (var i = 0; i < 3; i++) {
            if (t === students[i][index % students[i].length]) {
                answer[i][1]++;
            }
        }
    })
    answer.sort((a, b) => b[1] - a[1])
    for (var i = 0; i < answer.length - 1; i++) {
        if (answer[i][1] === answer[i + 1][1]) {
            count++;
        } else {
            break;
        }
    }
    console.log(answer, count)
    if (count === 0) {
        return [answer[0][0]]
    } else if (count === 1) {
        return [answer[0][0], answer[1][0]]
    }
    else {
        return [answer[0][0], answer[1][0], answer[2][0]]
    }
}
*/

//2트
function solution(answers) {
    let answer = new Array(3).fill(0);
    const students = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    let result = []
    answers.map((t, index) => {
        for (var i = 0; i < 3; i++) {
            t === students[i][index % students[i].length] && answer[i]++;
        }
    })
    let max = answer.reduce((acc, cur) => acc > cur ? acc : cur)
    answer.map((ans, i) => ans === max && result.push(i + 1))
    return result
}