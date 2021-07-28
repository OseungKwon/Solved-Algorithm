function birthday(s, d, m) {
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
        let sum = 0;
        for (let j = 0; j < m; j++) {
            sum += s[i + j]
        }
        sum === d && answer++;
    }
    return answer

}