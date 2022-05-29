function getMiddle(param){

    const splitString = param.split('')

if (param.length % 2 == 0) {
    console.log("even")
    const evenCenter = param.length / 2
    console.log(evenCenter)
    console.log(param[evenCenter-1])
    console.log(param[evenCenter])
    return param[evenCenter-1] + param[evenCenter]
} else {
    console.log("odd")
    const oddCenter = param.length / 2
    console.log(oddCenter)
    const floorCenter = Math.floor(oddCenter)
    console.log(floorCenter)
    return param[floorCenter]
}
}

console.log(getMiddle("Jaden"))