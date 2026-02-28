const accountId = 144553
let accountEmail = "yash@google.com" // no scope problem in let
var accountPassword = "12345" // scope problem in var
accountCity = "Jaipur"
let accountState

// Because of scope problem we use let instead of var
/*
Prefer not to use var
because of block scope and functional scope
*/
// accountId = 2 // not allowed to change const variable value

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity, accountState])