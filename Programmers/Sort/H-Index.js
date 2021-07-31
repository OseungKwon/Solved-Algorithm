function solution(citations) {
    let answer = 0;
    let count = 0;
    citations = citations.sort((a, b) => a - b)
    for (let i = citations.length - 1; i >= 0; i--) {
        count++;
        if (count <= citations[i]) {
            answer = count
        }
    }
    return answer;
}