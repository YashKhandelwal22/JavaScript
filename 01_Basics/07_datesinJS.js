let myDate = new Date()
console.log(myDate.toString()); // Thu Apr 16 2026 07:44:53 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()) // Thu Apr 16 2026
console.log(myDate.toLocaleString()) // 4/16/2026, 7:44:53 AM
console.log(myDate.toISOString()) // 2026-04-16T07:44:53.283Z
console.log(myDate.toLocaleDateString()) // 4/16/2026
console.log(typeof myDate) // object

// let myCurrentDate = new Date(2023,0,23) // 1/23/2023, 12:00:00 AM
// let myCurrentDate = new Date(2023,0,23,5,3) // 1/23/2023, 5:03:00 AM
// let myCurrentDate = new Date("2023-01-14") // 1/14/2023, 12:00:00 AM
let myCurrentDate = new Date("01-14-2023") // 1/14/2023, 12:00:00 AM
// console.log(myCurrentDate.toDateString())
console.log(myCurrentDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp) // 1776326296563
console.log(myCurrentDate.getTime()); // 1673654400000
console.log(Math.floor(Date.now()/1000)) // 1776326296

let newDate = new Date()
console.log(newDate); // 2026-04-16T08:00:10.345Z
console.log(newDate.getMonth() + 1); // 4
console.log(newDate.getDay()); // 4

newDate.toLocaleString('default', {
    weekday: "long",
    
})