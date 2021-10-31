// 중복 순열
const data = [1, 2, 3, 4];
const r = 2;

function permuteWithRepetition(data, r) {
  const result = [];
  if (r === 1) {
    return data.map((v) => [v]);
  }
  for (let i = 0; i < data.length; i++) {
    const main = data[i];
    const sub = data;
    //console.log(main,sub)
    const permuteR = permuteWithRepetition(sub, r - 1);
    result.push(...permuteR.map((v) => [main, ...v]));
  }
  return result;
}
const result = permuteWithRepetition(data, r);
console.log(...result, result.length);
