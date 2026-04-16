const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[0])

myArr.push(6) // it will add the element in the last
myArr.push(7)
myArr.pop() // it will remove the element from the last
console.log(myArr)

myArr.unshift(9) // it will add the element in the front 

myArr.shift() // it will remove from the front
console.log(myArr)

console.log(myArr.includes(9)) // it will return true if the value is present in the array if not then it will return false
console.log(myArr.indexOf(9)) // it will return the index of the value if the value is not in the array in that case it will return -1
console.log(myArr.indexOf(3))

const newArr = myArr.join()
console.log(newArr); // it will create a newArr but the return type of it will be string

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // it will slice from the starting element till tha last element - 1 and store it in the newArr and there is no effect in the original array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // it will splice from the starting element till the last element and it will remove those element from the original array and store in the newArr
console.log("C ", myArr);
console.log(myn2);