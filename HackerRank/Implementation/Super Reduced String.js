function superReducedString(s) {
    let temp;
    let count = 1;
    while (count !== 0) {
        count = 0;
        for (let i = 0; i < s.length - 1; i++) {
            if (s[i] === s[i + 1]) {
                temp = s.split(s[i] + s[i + 1]).join('')
                console.log(temp)
                count++;
            }
        }
        s = temp
    }
    return `${s ? s : 'Empty String'}`
}