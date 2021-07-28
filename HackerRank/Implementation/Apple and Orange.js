function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let fruits = new Array(2).fill(0)
    apples.forEach(apple => {
        if (s <= (a + apple) && (t >= (a + apple))) {
            fruits[0]++;
        }
    })
    oranges.forEach(orange => {
        if (s <= (b + orange) && (t >= (b + orange))) {
            fruits[1]++;
        }
    })

    fruits.map(fruit => console.log(fruit))
}