const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;


//public static path
const staticPath = path.join(__dirname, "../public");


app.set("view engine", "hbs");
app.use(express.static(staticPath));




//routing
app.get("", (req,res)=>{
    res.render("index");
})

app.get("/about", (req,res)=>{
    res.render("about");
})

app.get("/weather", (req,res)=>{
    res.render("Welcome to weather");
})

app.get("*", (req,res)=>{
    res.render("Error 404");
})

app.listen(port, ()=>{
    console.log("listening to port 8000")
});