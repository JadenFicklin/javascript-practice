function myFunction(arrayOfSheep) {

console.log(arrayOfSheep)

const trueArr = []
for ( let i = 0; i < arrayOfSheep.length; i++) {
if (arrayOfSheep[i]) {
    trueArr.push(arrayOfSheep[i])
}
}
console.log(trueArr)
console.log(trueArr.length)
}

  myFunction([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true])