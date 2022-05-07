const arr = [5, 3, 1, 2, 4, 6, 8, 7];

for (let i = 0; i < arr.length; i++) {
  let select = arr[i];
  for (let j = i - 1; j >= 0; j--) {
    if (select < arr[j]) {
      arr[j + 1] = arr[j];
    } else {
      break;
    }
    arr[j] = select;
  }
}

console.log(arr);
