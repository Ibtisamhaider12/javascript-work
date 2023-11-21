// CHAINING OF MAPS

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map(  (num) => num +10)

// CHAINING
const newNums = myNumbers
.map((num) => num * 10)
.map((num) => num + 2)
.filter((num) => num >= 50)

console.log(newNums);