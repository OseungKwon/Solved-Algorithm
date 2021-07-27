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