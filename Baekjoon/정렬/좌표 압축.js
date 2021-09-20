let arr = [2, 4, -10, 4, -9]
for (let i = 0; i < arr.length; i++) {
    arr[i] = [arr[i], i]
}

let result = []
arr.sort((a, b) => a[0] - b[0])
console.log(...arr)
let index = 0;
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][0] === arr[i + 1][0]) {
        result.push([index, arr[i][1]])
    } else {
        result.push([index++, arr[i][1]])
    }
}
result.push([index++, arr[arr.length - 1][1]])
console.log(...result.sort((a, b) => a[1] - b[1]))