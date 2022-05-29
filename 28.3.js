function sumArray(array) {
const min = Math.min(...array)
const max = Math.max(...array)
return array.reduce((a, b) => a+b, 0)-min-max
}

console.log(sumArray([ 6, 2, 1, 8, 10 ]))