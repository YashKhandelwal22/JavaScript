// Singleton
// Object.create

// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Yash",
    "full name": "Yash Khandelwal",
    age: 23,
    [mySym]: "mykey1",
    location: "Jaipur",
    email: "yash@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email) // no need to write in a double codes // yash@google.com
console.log(JsUser["email"]) // in this way need to write in double codes // yash@google.com
console.log(JsUser["full name"]) // no other way to write full name  //Yash Khandelwal
console.log(JsUser[mySym]) // mykey1

JsUser.email = "yash@chatgpt.com"
// Object.freeze(JsUser) // it will freeze the value of JsUser.email which means after this line if u try to change the value of it. It will not get change
JsUser.email = "yash@microsoft.com"
console.log(JsUser.email) // yash@chatgpt.com

JsUser.greeting = function(){
    console.log("Hello JS User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(JsUser.greeting) //[Function (anonymous)]
console.log(JsUser.greeting()) // Hello JS User undefined

console.log(JsUser.greetingTwo()); // Hello JS User, Yash undefined