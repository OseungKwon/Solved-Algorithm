const a = []
const fs = require('fs');
const stdin = `5
RRRBB
GGBBB
BBBRR
BBRRR
RRRRR
`.split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();
let t = input();
while (t--) {
  a.push(input().split(''))
}
console.log(a)
