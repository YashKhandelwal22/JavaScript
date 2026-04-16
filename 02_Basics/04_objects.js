// const tinderUser = new Object() // singleton object
const tinderUser={} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser) // { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Yash",
            lastname:"Khandelwal"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname); //Yash

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1,obj2} // it will create obj1 and obj2 as a key instead of combining them { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign({}, obj1, obj2, obj4) // it will combine the obj1 and obj2 { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj3 = {...obj1, ...obj2} //it will also do the same thing as Object.assign is dping { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj3); 

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser)) // it will return the array of all keys [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)) // it will return the array of all values [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)) // it will the return the key and pair as an array and these arrays will get stored in another array [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // it will return true if the key exists and false if it does not exists

const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "Yash"
}

// course.courseInstructor

const {courseInstructor: instructor} = course 
// console.log(courseInstructor)
console.log(instructor)

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]