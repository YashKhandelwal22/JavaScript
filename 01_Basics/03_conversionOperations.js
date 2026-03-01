// let score = "33" // 33
// let score = "33abc" // NaN
// let score = null // 0 
// let score = undefined //NaN
let score = true // 1 for true and 0 for false

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)

// 33 => 33
// 33abc => NaN
// true => 1; false => 0

let isLoggedIn = "Yash"

let booleanIsLoogedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoogedIn);
console.log(booleanIsLoogedIn);

// 1 => true; 0 => false
// "" => false
//"Yash" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);