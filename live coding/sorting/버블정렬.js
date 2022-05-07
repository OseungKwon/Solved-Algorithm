const arr = [5, 3, 1, 2, 4, 6, 8, 7];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
  }
}

console.log(arr);
