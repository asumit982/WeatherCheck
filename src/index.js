const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;


//public static path
const staticPath = path.join(__dirname, "../public");



app.use(express.static(staticPath));


//routing
app.get("", (req,res)=>{
    res.send("Welcome");
})

app.get("/about", (req,res)=>{
    res.send("Welcome to about");
})

app.get("/weather", (req,res)=>{
    res.send("Welcome to weather");
})

app.get("*", (req,res)=>{
    res.send("Error 404");
})

app.listen(port, ()=>{
    console.log("listening to port 8000")
});