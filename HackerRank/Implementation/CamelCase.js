function camelcase(s) {
    let answer = 1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) {
            answer++;
        }
    }
    return answer;
}