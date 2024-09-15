const express = require("express")
const app = express()

app.use(express.static("public"))

app.listen(3000,(err)=>{
    if(err) throw err
    console.log("server is running is port 3000");
    
})