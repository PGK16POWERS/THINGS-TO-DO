const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const app = express();

app.use(helmet())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",(req,res)=> {
    return res.render("index.ejs");
})

app.post("/create",(req,res)=> {
    return res.render("index.ejs");
})

app.get("/work",(req,res)=> {
    res.render("work.ejs");
})

app.post("/creatework",(req,res)=> {
    res.render("work.ejs");
})

app.listen(4500, () =>{
    console.log("Danko Supreme")
})