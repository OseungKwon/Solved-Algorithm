// 조합
const data = [1, 2, 3, 4];
const r = 2;

function combination(data, r) {
  const result = [];
  if (r === 1) {
    return data.map((v) => [v]);
  }
  for (let i = 0; i < data.length; i++) {
    const main = data[i];
    const sub = data.slice(i + 1);

    const permuteR = combination(sub, r - 1);
    result.push(...permuteR.map((v) => [main, ...v]));
  }
  return result;
}
let result = combination(data, r);
console.log(...result, result.length);
