/*
function solution(progresses, speeds) {
    var answer = [];
    while (progresses.length > 0) {
        progresses.forEach((t, i) => progresses[i] = t + speeds[i])
        var count = 0;
        var index = 0;
        while (progresses[count] >= 100) {
            progresses.shift();
            speeds.shift()
            index++;
        }
        index > 0 && answer.push(index)
    }
    return answer;
}
*/
// 시간 지나고 나서 다시 2트
/*
function solution(progresses, speeds) {
    let answer = [];
    while (progresses.length > 0) {
        let distribute = 0;
        while (progresses[0] < 100) {
            progresses = progresses.map((progress, index) => progress += speeds[index])
        }
        while (progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            distribute++;
        }
        answer.push(distribute)
    }
    return answer;
}
*/
// 3트
function solution(progresses, speeds) {
    let answer = [];
    while (progresses.length > 0) {
        let distribute = 0;
        progresses = progresses.map((progress, index) => progress += speeds[index])
        while (progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            distribute++;
        }
        distribute !== 0 && answer.push(distribute)
    }
    return answer;
}