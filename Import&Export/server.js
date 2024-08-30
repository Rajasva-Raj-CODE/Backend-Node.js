//! 1st way of importing
// let importing = require("./app")
// console.log(importing);

// require() ==> it is used to import a file and pass the path of the file inside require()

//! 2nd way of importing

let {sub} = require("./app")
console.log(sub(8,3));
