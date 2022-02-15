const { application } = require('express');
var express =require('express');
var app=express();
app.use('/test',express.static('content'));

app.get("/",(req,res)=>{
    res.send("hello world");
});

//익스프레스에 중요한거 1.라우터2.못들음


app.get("/hi",(req,res)=>{
    res.send("hi world");
});

 app.post("/",(req,res)=>{
    res.send("hello ");
 });

app.listen(3000);