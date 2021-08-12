const groupAnagrams = function (strs) {
    const group = {}

    strs.map((str, index) => {
        let sortStr = str.split('').sort().join('')
        if (group[sortStr]) {
            group[sortStr].push(str)
        } else {
            group[sortStr] = [str]
        }
    }
    )
    return Object.values(group)
};