function solution(clothes) {
    const hash = new Map();
    let count = 1;
    for (var i = 0; i < clothes.length; i++) {
        hash.get(clothes[i][1]) ? hash.set(clothes[i][1], hash.get(clothes[i][1]) + 1) : hash.set(clothes[i][1], 1)
    }
    let index = 1
    for (var [key, value] of hash) {
        index = index * (value + 1)
    }
    const answer = index - 1

    return answer;
}