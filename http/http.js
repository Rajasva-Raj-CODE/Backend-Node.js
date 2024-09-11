//? http module provides some methods----->

//? 1) get() ==> it gets/fetches to resource from the server
//? 2) post() ==> it sends data to the server
//? 3) delete() ==> it deletes the resource
//? 4) put() ==> it is used to update the resource
//? 5) patch() ==> it is used to update the resource

//! 1) import http module
//! 2) with the help of createServer() we can create a server, createServer() takes a callback function with two parameters request and response.
//! to assign a port to a server we use listen()

//? if we want to display any message to the UI we use write(). example res.write("message")

//? end() ==> it is used to end the current request and response cycle

//? if any modifications/updates are done, then in order to get the updated output we need to kill (in terminal press "ctrl + c" ) the server and start the server again.

/*let https = require("http")
// console.log(http);

let server = https.createServer((req,res)=>{
 res.writeHead(404,"not found",{"content-type":"text/plain"});
 res.write("hello from the server")
 res.end
})

server.listen(3000,(err)=>{
    if(err) throw err;
    console.log("server is running on port 3000");
    
})*/

//! ========================= sending html contents ==================

// let https = require("node:http");
// let fs = require("fs");

//? sending html contents
// let server= https.createServer((req,res)=>{
//     // res.writeHead(200,"success",{"content-type":"text/html"})
//     // res.write("<h1>Hello world</h1>")
//     // res.end
//     //? displaying the html file
//     // res.writeHead(200,"ok",{"content-type":"text/html"})
//     // let data = fs.readFileSync("./index.html","utf-8")
//     // res.end(data)
//     //? sending data using stream
//     // let data = fs.createReadStream("./index.html")
//     // data.pipe(res)
//     fs.createReadStream("./index.html").pipe(res)
// })

// server.listen(9000,(err)=>{
//     if(err) throw err
//     console.log("server is running on port 9000");

// })

//! ========================= sending css contents ==================

// let server = https.createServer((req,res)=>{
//     res.writeHead(200,"ok",{"content-type":"text/css"})
//     fs.createReadStream("./style.css").pipe(res)

// })

// server.listen(9000,(err)=>{
//     if(err)  throw err
//     console.log("server running");

// })

//! routing ==> to handle multiple routes requested by user based on the endpoints

// let server = https.createServer((req, res) => {
//   // console.log(req.url);

//   // //? by default landing page url === /
//   //! routing
//   //? home page
//   if(req.url==="/"){
//     res.writeHead(200,"ok",{"content-type":"text/plain"})
//     res.end("home page")
//   }
//   else if(req.url==="/about"){
//     res.writeHead(200,"ok",{"content-type":"text/plain"})
//     res.end("about page")
//   }
//   else if(req.url==="/download"){
//     res.writeHead(200,"ok",{"content-type":"text/plain"})
//     res.end("download page")
//   }
//    else{
//     res.end("page not found")
//    }
// });

// server.listen(9000, (err) => {
//   if (err) throw err;
//   console.log("server is running");
// });

// ! routing with sending html pages =================

let https = require("http");
let fs = require("fs");

let server = https.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "ok", { "content-type": "text/html" });
    fs.createReadStream("./public/home.html").pipe(res);
  } else if (req.url === "/about") {
    res.writeHead(200, "ok", { "content-type": "text/plain" });
    fs.createReadStream("./public/about.html").pipe(res);
  }else if (req.url === "/download") {
    res.writeHead(200, "ok", { "content-type": "text/plain" });
    fs.createReadStream("./public/download.html").pipe(res);
  }
  else if (req.url === "/style") {
    res.writeHead(200, "ok", { "content-type": "text/plain" });
    fs.createReadStream("./public/style.css").pipe(res);
  }
  else if (req.url === "/data") {
    res.writeHead(200, "ok", { "content-type": "application/json" });
    fs.createReadStream("./public/data.json").pipe(res);
  }else{
    res.writeHead(200,"ok",{"content-type":"text/html"})
    fs.createReadStream("./public/404.html").pipe(res)
  }

});
server.listen(9000,(err)=>{
    if(err) throw err;
    console.log("server running.............");
    
})