function compareTriplets(a, b) {
    const sizeA = a.filter((t, i) => t > b[i]).length
    const sizeB = a.filter((t, i) => t < b[i]).length
    return [sizeA, sizeB]

}