function solution(numbers) {
    // numbers 쪼개기
    numbers = numbers.split('')
    let answer = [];

    // 순열을 통한 결과값 구하기
    function permutation(arr, selectNum) {
        let result = [];
        if (selectNum === 1) return arr.map((v) => [v]);
        arr.forEach((v, idx, arr) => {
            const fixer = v;
            const restArr = arr.filter((_, index) => index !== idx);
            const permuationArr = permutation(restArr, selectNum - 1);
            let combineFixer = permuationArr.map((v) => [fixer, ...v]);
            result.push(...combineFixer);
        });
        return result;
    }
    // 반복문을 통해 조각을 합치는 개수에 따른 결과값들을 배열에 저장
    let piece = []
    for (var i = 1; i <= numbers.length; i++) {
        piece.push(permutation(numbers, i))
    }
    // 순열로 나온 경우의 '문자 배열'들을 '숫자'로 바꾸어주는 작업
    for (var i = 0; i < piece.length; i++) {
        for (var j = 0; j < piece[i].length; j++) {
            answer.push(Number(piece[i][j].join('')))
        }
    }

    // 소수를 찾는 범위를 max값으로 한정시키기 위해 max값 구하기
    let max = answer.reduce((acc, cur) => acc > cur ? acc : cur)
    // 소수 구하기(에라토스테네스의 체)
    let primeNumbers = new Array(max + 1).fill(true);
    for (let i = 0; i * i <= max + 1; i += 1) {
        i < 2 && (primeNumbers[i] = false)
        if (primeNumbers[i]) {
            for (let j = i * i; j <= max + 1; j += i) {
                primeNumbers[j] = false;
            }
        }
    }
    // 구한 값이 소수인지 확인하는 작업
    answer = answer.filter(a => primeNumbers[a] === true)
    // 중복 값 제거, 뒤늦게 넣어준 이유는 set 상태에서 여러 메서드들 사용 불가하기 때문에
    answer = new Set(answer)
    return answer.size
}
/* 참고한 블로그
순열: https://velog.io/@proshy/JS순열조합중복순열-구하기
에라토스테네스의 체: https://junkim.netlify.app/posts/programmers0807
*/