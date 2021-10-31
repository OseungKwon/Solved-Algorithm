// 순열
let data = [1, 2, 3, 4];
let r = 2;

function permutation(data, r) {
  const result = [];
  if (r === 1) {
    return data.map((v) => [v]);
  }
  for (let i = 0; i < data.length; i++) {
    const main = data[i];
    const sub = data.filter((v) => v !== data[i]);
    //console.log(main,sub)
    const permuteD = permutation(sub, r - 1);

    result.push(...permuteD.map((v) => [main, ...v]));
  }
  return result;
}
const result = permutation(data, r);
console.log(...result, result.length);
