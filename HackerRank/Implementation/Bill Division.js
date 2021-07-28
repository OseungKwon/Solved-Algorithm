function bonAppetit(bill, k, b) {
    bill.splice(k, 1)
    let sum = bill.reduce((acc, cur) => acc += cur)
    console.log(`${sum / 2 === b ? 'Bon Appetit' : b - sum / 2}`)
}