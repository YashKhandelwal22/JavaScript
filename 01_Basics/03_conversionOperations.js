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


// *********************************Operations**********************************

let value = 3
let negValue = -value
console.log(negValue)

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = " yash"
let str3 = str1+str2
console.log(str3);


console.log("1"+2); // in this the output will be 12 because 1 is in string and it comes first
console.log(1+"2"); // in this the output will be 12 because before 2 there is only 1 and 2 is in string
console.log("1"+2+2);  // in this the output will be 122 because 1 is in string and it comes first
console.log(1+2+"2"); // in this the output will be 32 because 1 and 2 is number it will get added and the other 2 is string so it will not get added

console.log(true);
console.log(+true); // it will give 1 only
// console.log(true+); // it will give error
console.log(+""); // it will give 0 only

let num1,num2,num3

num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
++gameCounter
console.log(gameCounter);