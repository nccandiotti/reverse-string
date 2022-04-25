function reverseString(str) {
  // type your code here
  const arr = str.split("")
  for (i = arr.length - 1; i >= 0 - 1; i--) {
    console.log(arr[i])
  }
}

reverseString("fish")
reverseString("hi")
if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'")
  console.log("=>", reverseString("hi"))

  console.log("")

  console.log("Expecting: 'ybabtac'")
  console.log("=>", reverseString("catbaby"))
}

module.exports = reverseString

// Please add your pseudocode to this file
// And a written explanation of your solution
