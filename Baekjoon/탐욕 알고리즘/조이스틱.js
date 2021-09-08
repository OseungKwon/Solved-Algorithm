function solution(name) {
    var answer = 0;
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    // 알파벳 탐색
    function search(word) {
        for (let i = 0; i < alphabet.length; i++) {
            if (alphabet[i] === word || alphabet[alphabet.length - i] === word) {
                console.log('find', answer)
                return answer;
            }
            answer++;
        }
    }
    var findA = 0;
    if (name[0] === 'A') {
        for (let i = 0; i < name.length; i++) {
            if (name[i] !== 'A') break;
            findA++;
        }
    } else {
        for (let i = 1; i < name.length; i++) {
            if (name[i] !== 'A') break;
            findA++;
        }
    }

    console.log('a', findA)
    if (findA === 0) {
        for (let i = 0; i < name.length; i++) {
            search(name[i])
            if (i !== 0) answer++;
        }
    } else if (findA === name.length) {
        return 0;

    } else {
        search(name[0])
        for (let i = name.length - 1; i > findA; i--) {
            search(name[i])
            answer++
        }
    }


    return answer;
}