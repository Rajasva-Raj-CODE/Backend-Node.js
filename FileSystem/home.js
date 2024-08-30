// !fs --> fs stand for FileSystem

//?to interact with OS and perform CRUD on files and folders/directory

//*import fs module first   
//*syntax --> let/const variableName = require("node:module-name")

let fs = require("fs");

//<--------------------> synchronous way or blocking way <-------------------->
//!1) =========================read file sync==================== 
// *method name == readFileSync()
// *syntax == fs.readFileSync("path", "encoding" )

//?in path file should be created first

// console.log("start");
// console.log("middle");
// let data = fs.readFileSync("./data.txt","utf-8") 
// console.log(data);

// console.log("end");

//!2) =========================write file sync==================== 
//* method name == writeFileSync()
//* syntax == fs.writeFileSync("path", "data" ) 

// console.log("start");
// console.log("middle");
// fs.writeFileSync("./data.txt","second data added")
// fs.writeFileSync("index.txt","byeeeee")
// console.log("end");

//?if we pass a file name which is not present then it will create a new file with the provided data
//?if we pass the file name which is already Present,then it will over write the existing data with the new one

// ! 3) =================update/append file=========================
//* method name ==> appendFileSync()
//* syntax ==> fs.appendFileSync("filename/path", "data")

// console.log("start");
// console.log("middle");
// fs.appendFileSync("./data.txt","this is updated statements")
// console.log("end");

//? if we pass the path of existing file then it will update/append the data otherwise it will create a new file with the provided data.

//! 4) ===============================delete file =======================
//* method name ==> unlinkSync()
//* syntax ==> fs.unlinkSync("path")

// console.log("start");
// console.log("middle");
// fs.unlinkSync("./index.txt")
// console.log("end");


//* <<-------------------COPY THE CONTENTS OF "fs.js" to a new file "home.js"------------->>>

console.log("start");
let readfile = fs.readFileSync("./fs.js","utf-8")
console.log(readfile);
fs.writeFileSync("./home.js",readfile)
console.log("file created");
console.log("end");





