/* 1트
function dayOfProgrammer(year) {
    if (1700 <= year && 1917 >= year) {
        if (year % 4 == 0) {
            return `12.09.${year}`
        }
        return `13.09.${year}`
    }
    else if (year === 1918) {
        return `26.09.${year}`
    }
    else {
        if ((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0))) {
            return `12.09.${year}`
        }
        return `13.09.${year}`
    }
}
*/

// 짧은 코드
function dayOfProgrammer(year) {
    let isLeefYeer = (year % 4 === 0)
        ? ((year % 100 === 0) ? ((year < 1918 || (year % 400 === 0)) ? true : false) : true)
        : false;

    return `${year === 1918 ? 26 : (isLeefYeer ? 12 : 13)}.09.${year}`;
}

