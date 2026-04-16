const marvel_heros = ["Thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros) // it will push dc_heros as a single element in marvel_heros
// console.log(marvel_heros) // [ 'Thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]) // flash

const allHeros = marvel_heros.concat(dc_heros) // it will concat dc_heros not as a single element in marvel_heros but it will not get stored permanently [ 'Thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
console.log(allHeros)

const all_new_heros = [...marvel_heros,...dc_heros] // it will do the same thing that concat do [ 'Thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Yash")) // it will check is it a array or not
console.log(Array.from("Yash")) // it will return it in as an array
console.log(Array.from({name : "Yash"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) // it will return an array of set of elements(like array, variables or anything)