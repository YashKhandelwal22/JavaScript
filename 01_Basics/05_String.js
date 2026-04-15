const name = "Yash"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Yash-Kh-com') // it will store it in a array/key-pair way

console.log(gameName[2]); // to access at a particular index
console.log(gameName.__proto__);
console.log(gameName.length); // it will give the length
console.log(gameName.toUpperCase()); // it will convert in uppercase
console.log(gameName.charAt(5)); // it will return the character at a particular index
console.log(gameName.indexOf('h')); // it will return the index of a particular character
const newString = gameName.substring(0,4) // can't give negative value
console.log(newString)
const anotherString = gameName.slice(-6,4)
console.log(anotherString)
const newStringOne = "     Yash     "
console.log(newStringOne);
console.log(newStringOne.trim()) // it will trim the extra spaces and lines
const url = "https://yash.com/yash20%khandelwal"
console.log(url.replace('20%','-')); // it will replace
console.log(url.includes('yash')); // it will check if a particular word or character is present or not
console.log(gameName.split('-')) // it will split and return it in a array way