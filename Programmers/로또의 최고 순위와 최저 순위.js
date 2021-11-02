function solution(lottos, win_nums) {
  const score = [6, 6, 5, 4, 3, 2, 1];

  const min = win_nums.filter((v) => lottos.includes(v)).length;
  const max = lottos.filter((v) => v === 0).length + min;

  return [score[max], score[min]];
}
