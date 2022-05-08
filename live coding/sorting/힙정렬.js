const arr = [5, 3, 1, 2, 4, 6, 8, 7];

function heapSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr = heapify(arr, i);
    if (arr[0] > arr[i]) [arr[0], arr[i]] = [arr[i], arr[0]];
  }
  return arr;
}

function heapify(arr, i) {
  let index = parseInt(i / 2) - 1;
  while (index >= 0) {
    const left = arr[index * 2 + 1];
    const right = arr[index * 2 + 2];

    if (left >= right && left > arr[index])
      [arr[index], arr[index * 2 + 1]] = [arr[index * 2 + 1], arr[index]];
    else if (right > left && right > arr[index])
      [arr[index], arr[index * 2 + 2]] = [arr[index * 2 + 2], arr[index]];
    index--;
  }
  return arr;
}
console.log(heapSort(arr));
