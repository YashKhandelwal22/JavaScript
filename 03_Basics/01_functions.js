function sayMyName(){
    console.log("Y")
    console.log("A")
    console.log("S")
    console.log("H")
}

// sayMyName() // Y
               // A
               // S
               // H

// function addTwoNumbers(number1, number2){ // parameters(number1, number2)
//     console.log(number1 + number2) // 7
// }

// addTwoNumbers(3,4) // arguments(3,4) 

// const result = addTwoNumbers(3,4)

// console.log("Result: ", result) // Result:  undefined

function addTwoNumbers(number1, number2){ 
    // let result = number1 + number2
    // return result
    return number1 + number2 
}

const result = addTwoNumbers(3,4)

console.log("Result: ", result)

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Yash")) // Yash just logged in

// function loginUserMessage(username){
//     if(!username){ // or username === undefined
//         console.log("Please enter a username") // Please enter a username
//         return
//     }
//     return `${username} just logged in` // undefined just logged in
// }
// console.log(loginUserMessage()) // undefined

// function loginUserMessage(username = "sam"){ // giving sam as a default value
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in` // sam just logged in
// }

// console.log(loginUserMessage()) // sam just logged in

function loginUserMessage(username = "sam"){ // giving sam as a default value
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in` // Yash just logged in
}

console.log(loginUserMessage("Yash")) // it will override the sam by Yash and the output will be Yash just logged in

// function calculateCartPrice(...num1){
//     return num1 // [ 200, 400, 500, 2000 ]
// }

// console.log(calculateCartPrice(200,400,500,2000)) // [ 200, 400, 500, 2000 ]

function calculateCartPrice(val1, val2, ...num1){ // val1 = 200, val2 = 400
    return num1 // [ 500, 2000 ]
}

console.log(calculateCartPrice(200,400,500,2000)) // [ 500, 2000 ]

const user = {
    username: "yash",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`) // Username is yash and price is 199
}

// handleObject(user) // Username is yash and price is 199
handleObject({
    username: "sam",
    price: 399
}) // Username is sam and price is 399

const myNewArray = [200, 400, 100, 200]
function returnSecondArray(getArray){
    return getArray[1]
}

// console.log(returnSecondArray(myNewArray)) // 400
console.log(returnSecondArray([200, 400, 500, 1000])) // 400