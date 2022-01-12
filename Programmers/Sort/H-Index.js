function solution(citations) {
  citations = sort((a, b) => a - b);
  let count = 0;
  for (let i = citations.length - 1; i >= 0; i--) {
    count++;
    if (count > citations[i]) {
      return --count;
    }
  }
  return count;
}
