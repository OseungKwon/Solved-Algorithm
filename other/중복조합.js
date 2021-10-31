// 중복 조합
const data = [1, 2, 3, 4];
const r = 2;

function combinationWithRepetition(data, r) {
  const result = [];
  if (r === 1) {
    return data.map((v) => [v]);
  }
  for (let i = 0; i < data.length; i++) {
    const main = data[i];
    const sub = data;

    let permuteR = combinationWithRepetition(sub, r - 1);
    result.push(...permuteR.map((v) => [main, ...v]));
  }
  return result;
}
let result = combinationWithRepetition(data, r);
result = [...new Set(result.map((v) => JSON.stringify(v.sort())))].map((v) =>
  JSON.parse(v)
);
console.log(...result, result.length);
