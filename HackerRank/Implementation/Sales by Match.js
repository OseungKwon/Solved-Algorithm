function sockMerchant(n, ar) {
    let count = 0;
    const reducer = ((acc, cur) => {
        cur in acc ? acc[cur]++ : acc[cur] = 1
        return acc
    })

    const arr = Object.entries(ar.reduce(reducer, {}))
    for (let [key, value] of arr) {
        while (value > 1) {
            value -= 2
            count++
        }
    }
    console.log(arr)
    return count;
}