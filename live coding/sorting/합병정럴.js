const arr = [5, 3, 1, 2, 4, 6, 8, 7];

function merge(left, right) {
  let result = [];
  let leftP = 0;
  let rightP = 0;

  while (leftP < left.length && rightP < right.length) {
    if (left[leftP] < right[rightP]) {
      result.push(left[leftP]);
      leftP++;
    } else {
      result.push(right[rightP]);
      rightP++;
    }
  }
  return [...result, ...left.slice(leftP), ...right.slice(rightP)];
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const mid = parseInt(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(arr));
