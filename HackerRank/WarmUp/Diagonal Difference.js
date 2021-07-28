function diagonalDifference(arr) {
    let sumA = 0;
    let sumB = 0;
    const len = arr.length
    console.log(len)
    for (let i = 0; i < len; i++) {
        console.log(arr[i][i], arr[i][arr[0].length - i - 1])
        sumA += arr[i][i]
        sumB += arr[i][arr[0].length - i - 1]
    }
    return Math.abs(sumA - sumB)
}