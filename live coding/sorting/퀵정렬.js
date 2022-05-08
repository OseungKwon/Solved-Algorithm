const arr = [5, 3, 1, 2, 4, 6, 8, 7];

function divide(arr, left, right, pivot) {
  while (left <= right) {
    while (arr[left] < arr[pivot]) left++;
    while (arr[right] > arr[pivot]) right--;
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return left;
}

function quickSort(arr, left, right) {
  if (left >= right) return;
  const mid = parseInt((left + right) / 2);
  const pivot = arr[mid];
  const part = divide(arr, left, right, pivot);

  quickSort(arr, left, pivot - 1);
  quickSort(arr, part, right);
  return arr;
}
quickSort(arr, 0, arr.length - 1);
