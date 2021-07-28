function getTotalX(a, b) {
    let result = 0;
    let maxA = a.reduce((acc, cur) => acc > cur ? acc : cur);
    let minB = b.reduce((acc, cur) => acc < cur ? acc : cur);
    for (let i = maxA; i <= minB; i++) {
        if (a.every(itemA => i % itemA === 0)) {
            if (b.every(itemB => itemB % i === 0)) {
                result++;
            }
        }
    }
    return result;
}