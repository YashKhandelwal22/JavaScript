const user = {
    username: "Yash", // Yash, welcome to website
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this) // {
                            // username: 'Yash',
                            // price: 999,
                            // welcomeMessage: [Function: welcomeMessage]
                          // }
                          // {
                            // username: 'sam',
                            // price: 999,
                            // welcomeMessage: [Function: welcomeMessage]
                          // }

    }
}

// user.welcomeMessage()
// user.username = "sam" // sam, welcome to website
// user.welcomeMessage()

console.log(this) // {}

function chai(){
    const username = "yash"
    console.log(this.username) // undefined because this is only used in object not in function
}

chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // undefined because this is only used in object not in function
// }

// chai() 

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this.username); // undefined
//     console.log(this); // {}
// }


// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// console.log(addTwo(3,4)) // 7

// const addTwo = (num1,num2) => num1+num2

// console.log(addTwo(3,4)) // 7

// const addTwo = (num1, num2) => ( num1 + num2 )

// console.log(addTwo(3,4)) // 7

// Note : in curly braces we have to write return statement but in paranthesis we don't have to write return statement

const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(3, 4)) // { username: 'hitesh' }