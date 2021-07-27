function solution(participant, completion) {
    var answer = '';
    const hashMap = new Map();
    // 해시에 player 추가, 동일 선수면 +1씩 더해진다.
    participant.forEach(player => {
        if (!hashMap.get(player)) {
            hashMap.set(player, 1)
        } else {
            hashMap.set(player, hashMap.get(player) + 1)
        }
    })
    // 완료한 선수만큼 해시의 value를 빼준다.
    completion.forEach(player => {
        hashMap.set(player, hashMap.get(player) - 1)
    })
    // 결국 value가 1 이상인 것은 완주하지 못한 선수밖에 없게 된다.
    participant.forEach(player => {
        if (hashMap.get(player) > 0) {
            answer = player
        }
    })

    return answer;
}