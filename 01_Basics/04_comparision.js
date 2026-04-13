console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

console.log("2">1);
console.log("02">1);

console.log(null>0);
console.log(null==0);
console.log(null>=0);

/*
An equality chack == and comparisions > < >= <= works differently 
Comparisions convert null to a number, treating it as a 0.
That's why (3) null >= 0 is true and (1) null > 0 is false 
*/

console.log(undefined==0); // false
console.log(undefined>0); // false
console.log(undefined<0); // false

console.log("2" === 2); // it will not just check the value but it will also check the datatype also