const bracket = (arr) => {
    let stay = [];
    while (arr.length > 0) {
        let temp = arr.pop();
        if (temp === '(') {
            if (stay.pop() !== ')') {
                return 'NO';
            }
        } else {
            stay.push(temp)
        }
    }
    if (arr.length === 0 && stay.length === 0) {
        return 'YES';
    }
    return 'NO';
}

function main() {
    let fs = require('fs');
    let input = fs.readFileSync('/dev/stdin').toString().split('\n');

    const caseCount = Number(input[0]);
    for (let i = 1; i <= caseCount; i += 1) {
        let cases = input[i];
        let arr = []
        for (let i = 0; i < cases.length; i++) {
            arr.push(cases[i])
        }
        console.log(bracket(arr))
    }
}
main()