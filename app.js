let express = require("express")
let socket = require("socket.io")
// let nodemon = require("nodemon")

let app = express();

app.use(express.static("public"))
// http://localhost:5000
let server = app.listen(5000, ()=>{
    console.log("app.listen is working");
})

let io = socket(server);
io.on("connect",()=>{
    console.log("socket .io is running");
})