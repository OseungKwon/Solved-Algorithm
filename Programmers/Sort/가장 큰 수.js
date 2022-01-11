/* 1트 테스트 케이스는 통과했지만 제출 시에 시간이 너무 소요되서 통과 못함
function solution(numbers) {
    var answer = '';
    // 순열
    const permutation = (numbers, range) => {
        let output = []
        if (range === 1) return numbers.map(num => [num]);

        numbers.forEach((number, index, temp) => {
            const mainNumber = number;
            const subNumbers = numbers.filter((_, idx) => idx !== index);
            const rePermutation = permutation(subNumbers, range - 1);
            const combine = rePermutation.map(num => [mainNumber, ...num]);
            output.push(...combine)
        })
        return output;
    }

    var arr = permutation(numbers, numbers.length)
    var k = []
    for (var i = 0; i < arr.length; i++) {
        k.push(Number(arr[i].join('')))
    }
    answer = k.reduce((acc, cur) => acc > cur ? acc : cur)
    return String(answer);
}
*/
// 2트
// 문자열 비교 시에 '10'>'1' 이 true값이 나오는 문제가 있었는데,
// 이는 sort시에 각 요소를 더한 값을 비교하므로써 해결했다.
function solution(numbers) {
  let answer = "";
  const numbersToString = numbers.map((num) => String(num));
  numbersToString.sort((a, b) => b + a - (a + b));
  answer = numbersToString.join("");
  return answer[0] === "0" ? "0" : answer;
}
// https://velog.io/@wkahd01/프로그래머스-정렬-문제풀이
