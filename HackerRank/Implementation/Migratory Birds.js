function migratoryBirds(arr) {
    const reducer = (acc, cur) => {
        cur in acc ? acc[cur]++ : acc[cur] = 1
        return acc
    }
    const ar = Object.entries(arr.reduce(reducer, {}))
    ar.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]
    )
    return ar[0][0]
}