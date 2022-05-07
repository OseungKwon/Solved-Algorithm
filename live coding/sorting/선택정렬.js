const arr = [5, 3, 1, 2, 4, 6, 8, 7];

for (let i = 0; i < arr.length - 1; i++) {
  let minIndex = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[minIndex] > arr[j]) minIndex = j;
  }
  if (minIndex !== i) [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
}
console.log(arr);
