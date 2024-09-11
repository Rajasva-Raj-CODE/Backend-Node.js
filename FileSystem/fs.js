// !fs --> fs stand for FileSystem

//?to interact with OS and perform CRUD on files and folders/directory

//*import fs module first
//*syntax --> let/const variableName = require("node:module-name")

// let fs = require("fs");

//todo<--------------------> synchronous way or blocking way <-------------------->
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

//! 4) ========================delete file =======================
//* method name ==> unlinkSync()
//* syntax ==> fs.unlinkSync("path")

// console.log("start");
// console.log("middle");
// fs.unlinkSync("./index.txt")
// console.log("end");

//* <<-------------------COPY THE CONTENTS OF "fs.js" to a new file "home.js"------------->>>

// console.log("start");
// let readfile = fs.readFileSync("./fs.js","utf-8")
// console.log(readfile);
// fs.writeFileSync("./home.js",readfile)
// console.log("file created");
// console.log("end");

//todo<-------------------->  CRUD on folders  <-------------------->

//! 1) creating a folder

//* method name ==> mkdirSync()
//* syntax ==> fs.mkdirSync("folder-name")

// fs.mkdirSync("express")
// console.log("folder created");

//* <---------------->create a folder inside local folder<---------------->

// fs.mkdirSync("../local/users")
// console.log("folder created");

//! 2) delete a folder

//* method name ==> rmdirSync()
//* syntax ==> fs.rmdirSync("path")

// fs.rmdirSync("./express")
// console.log("folder deleted");

//! 3) renaming a folder/file

//* method name ==> renameSync()
//* syntax ==> fs.renameSync("old filename/ foldername", "new name")

// fs.renameSync("../local","localsession")
// console.log("renaming folder");

//!                           "backend/src/controllers/user.js" ==> nested operation (creation)

// fs.mkdirSync("../backend")
// console.log("backend folder created");

// fs.mkdirSync("../backend/src")
// console.log("src folder created");

// fs.mkdirSync("../backend/src/controller")
// console.log("controller folder created");

// fs.mkdirSync("../backend/src/controller/user")
// console.log("user folder created");

// fs.writeFileSync("../backend/src/controller/user/user.js","hello")
// console.log("user file created");

//!                           "backend/src/controllers/user.js" ==> nested operation (deletion)

// fs.unlinkSync("../backend/src/controller/user/user.js")
// console.log("user file deleted");
// fs.rmdirSync("../backend/src/controller/user")
// fs.rmdirSync("../backend/src/controller")
// fs.rmdirSync("../backend/src")
// fs.rmdirSync("../backend")

//todo                           ================================Async Execution================================

// *==> using callback
// *==> using then catch
// *==> using async await

//!       ==========================async using callbacks=====================
//! 1) Creating File------------------>>>>>>>>
//* method name ==> writefile()
//* syntax ==> fs.writeFile("path","data",cb)

// console.log("start");
// console.log("middle");
// error first callback
// fs.writeFile("index.html", "this is first statement", (err) => {
//   if (err) console.log(err);
//   console.log("file created");
// });
// console.log("end");
//! 2) reading File------------------>>>>>>>>
//* method name ==> readFile()
//* syntax ==> fs.readFile("path","encoding",cb)

// console.log("start");
// console.log("middle");
// fs.readFile("fs.js","utf-8",(err,mydata)=>{
//     if(err) throw err
//     console.log("file  read");
//     console.log(mydata)
// })
// console.log("end");

//! 3) update or append  File------------------>>>>>>>>
//* method name ==> appendFile()
//* syntax ==> fs.appendFile("path","data",cb)

// console.log("start");
// console.log("middle");
// fs.appendFile("index.html","this is second statemnt",(err)=>{
//     if(err) throw err
//     console.log("file upated");
// })
// console.log("end");

//! 4) Deleting  File------------------>>>>>>>>
//* method name ==> unlink()
//* syntax ==> fs.unlink("path",cb)

// console.log("start");
// console.log("middle");
// fs.unlink("index.html",(err)=>{if(err) throw err
//     console.log("deleted");

// })
// console.log("end");

//! 5)CREATING A FOLDER ------------------>>>>>>>>
//* method name ==> mkdir()
//* syntax ==> fs.mkdir("path",cb)

// fs.mkdir("../kya hai bae",()=>{
//     console.log("foldercreated");

// })

//todo                        ============================Using then catch block============================

let fs = require("fs").promises;

//! 1) creating a file------------------>>>>>>>>
//*  method name => writeFile()
//* syntax => fs. writeFile("path","data").then().catch()

// let data = fs.writeFile("./index.js", "<p>raj</p>");
// data
//   .then(() => {
//     console.log("file created");
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });
//   console.log("end");

//! 2) reading a file------------------>>>>>>>>
//*  method name => readFile()
//* syntax => fs.readFile("path","encoding").then()catch()

// fs.readFile("index.js","utf-8")
// .then((res)=>{
//     console.log(res);

// }).catch((err)=>{
//     console.log(err);

// })

//? ---------------------------------copy the contents of "fs.js" to new file "index.txt" using then/catch-------------------------------

// fs.readFile("fs.js", "utf-8").then((res) => {
//   fs.writeFile("./copy.txt", res)
//     .then(() => {
//       console.log("file copied");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

//! 3) updating a file------------------>>>>>>>>

//*  method name => appendFile()
//* syntax => fs.appendFile().then().catch()

// fs.appendFile("./copy.txt","data to be added")
// .then(()=>{
//     console.log("file added");  
// })
// .catch((err)=>{
//     console.log(err);
    
// })
//! 4) delete a file------------------>>>>>>>>

//* method name => unlink()
//* syntax => fs.unlink().then().catch()

// fs.unlink("./copy.txt")
// .then(()=>{
//     console.log("file deleted");
    
// }).catch((err)=>{
//     console.log(err);
    
// })

 //! 5) creating a folder------------------>>>>>>>>

//*  method name => mkdir()
//* syntax => fs.mkdir().then().catch()

// fs.mkdir("./node modules").then(()=>{
//     console.log("folder created");
    
// }).catch((err)=>{
//     console.log(err);
    
// })

//deleting a folder,rename file / folder


//?                                     ========================using async await===============================

//! 1) creating a file

console.log("start");
async function write () {
    console.log("inside async/await");
    await fs.writeFile("./index.html","data")
    console.log("bye");
}
console.log("end");
write()


