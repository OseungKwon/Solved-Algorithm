function getMoneySpent(keyboards, drives, b) {
    let cart = []
    keyboards.map(keyboard => {
        drives.map(drive => {
            (keyboard + drive <= b) && cart.push(keyboard + drive)
        })
    })
    console.log(cart)
    if (cart.length === 0) return -1;
    return cart.reduce((acc, cur) => acc > cur ? acc : cur)
}