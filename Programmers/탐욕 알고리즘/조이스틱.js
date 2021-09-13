function solution(name) {
    var answer = 0;
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    // 알파벳 탐색
    function search(word) {
        for (let i = 0; i < alphabet.length; i++) {
            if (alphabet[i] === word) {
                console.log('findf', answer, i, word)
                return answer;
            } else if (alphabet[alphabet.length - 1 - i] === word) {
                console.log('findb', answer, i, word)
                return answer++;
            }
            answer++;
        }
    }
    for (let i = 0; i < name.length; i++) {
        search(name[i]);
    }
    console.log(answer)
    let minMove = name.length - 1;
    for (let i = 1; i < name.length; i++) {
        if (name[i] === 'A') {
            for (var j = i + 1; j < name.length; j++) {
                if (name[j] !== 'A') break;
            }
            const left = i - 1;
            const right = name.length - j
            minMove = Math.min(minMove, left > right ? left + right * 2 : left * 2 + right);
            i = j;
        }
    }
    return answer + minMove;
}