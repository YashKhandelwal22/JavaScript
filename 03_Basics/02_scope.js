// let a = 10
// const b = 20
// var c = 30

let a = 300

if(true){
    let a = 10
    const b = 20
    // var c = 30

    // console.log("INNER: ", a)
}

// console.log(a) // it will give an error that a is not defined because we have defined a in if 
// console.log(b) // it will give an error that b is not defined because we have defined a in if 
// console.log(c) // in var it will not give any error and the output of this is 30

// console.log(a) // 300

function one(){
    const username = "yash"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website) // it will give an error that website is not defined because we have defined website in inner function

    two()
}

one()

if (true) {
    const username = "yash"
    if (username === "yash") {
        const website = " youtube"
        console.log(username + website)
    }
    // console.log(website) // it will give an error that website is not defined because we have defined website in inner if 
}

// console.log(username) // it will give an error that username is not defined because we have defined username in outer if

// *********************** interesting *************************

console.log(addone(5)) // output 6

function addone(num){
    return num + 1
}



// addTwo(5) it will give an error because addTwo is also a variable and we cannot initialize it before declaring it
const addTwo = function(num){
    return num + 2
}

addTwo(5)