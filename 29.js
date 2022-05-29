const sumFunction = (array) => {
    return array.reduce((a, b) => a + b, 0)
}
console.log(sumFunction([1, 2, 3, 4, 5, 6]))