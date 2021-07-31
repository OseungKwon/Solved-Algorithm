/* 1트
function solution(brown, yellow) {
    var answer = [];
    var square = brown + yellow;
    for (var i = 1; i <= yellow; i++) {
        for (var j = 1; j <= yellow; j++) {
            if (i * j === yellow) {
                if (brown === (i * 2 + j * 2 + 4)) {
                    return [j + 2, i + 2]
                }
            }
        }
    }
    return answer;
}
*/
// 2트
function solution(brown, yellow) {
    let yellowSqrt = Math.floor(Math.sqrt(yellow));
    for (let i = 1; i <= yellowSqrt; i++) {
        for (let j = yellow; j >= 1; j--) {
            if (i * j === yellow) {
                if (brown === (i * 2 + j * 2 + 4)) {
                    return [j + 2, i + 2]
                }
            }
        }
    }
}