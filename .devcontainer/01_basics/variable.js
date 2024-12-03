const accountId = 14453
let accountEmail = "naman@google.com"
var accountPassword = "12345"
accountCity = " jaipur "

//const - value can't be changed 
// accountId = 2  // TypeError: Assignment to constant variable.

accountEmail= "naman@jain.com"
accountPassword="456455"
console.table([accountId, accountEmail,accountPassword,accountCity]); // [] --> to solve error // TypeError [ERR_INVALID_ARG_TYPE]: The "properties" argument must be an instance of Array. Received type string (' naman@jain.com')

console.log(accountId);
