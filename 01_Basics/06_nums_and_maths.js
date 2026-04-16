const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length); // it will convert number into string and it will also return the length of it
console.log(balance.toFixed(2)) // it will return the in a float way like here we tell it to return 2 so the output of it will be 100.00

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)) //it will return the number like here we tell it 3 so it will return the 3 digit like here we get 23.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // it will return it in a indian way the output will be 10,00,000

// ************************* Maths **************************

console.log(Math)
console.log(Math.abs(-4)) // it will convert the negative value into positive
console.log(Math.round(5.3)) // it will round off the value
console.log(Math.ceil(4.2)) // it will return the next number like here we get 5 as a output
console.log(Math.floor(4.2)) // it will return the same number like here we get 4 as a output
console.log(Math.min(4,3,8,6)) // it will return the min value from the array
console.log(Math.max(4,3,8,6)) // it will return the max value from the array
console.log(Math.random()) // it will return the random number between 0-1
console.log((Math.random()*10)+1) // it will return the random number between 0-10 but as we have added+1 so the range become 1-11
console.log(Math.floor(Math.random()*10)+1) // it will return the random number between 0-10 but as we have added+1 so the range become 1-11 and it will return the same number without any deimal points
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min)