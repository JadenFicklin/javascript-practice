// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// 
// If no occurrences can be found, a count of 0 should be returned.

function strCount(str, letter){  
    //code here
    const strArr = []
    for (let i = 0; i < str.length; i++) {
        strArr.push(str[i])
    }
    const letterArr = []
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === letter) {
            letterArr.push(letter)
        }
    }
    return (letterArr.length)
  }

  strCount("hello", "l")