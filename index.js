const { application } = require('express');
var express =require('express');
var app=express();
app.use('/test',express.static('content'));

app.get("/",(req,res)=>{
    res.send("hello world");
});




app.get("/add",(req,res)=>{
    var p1 =req.param('p1');
    var p2 =req.param('p1');
    var result =Number(p1)+Number(p2);


 
    res.send("Result: "+ result);
 });



app.listen(3000);