// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


var express=require('express');
var app=express();

app.set("view engine","ejs");

app.post("/loginuser",function(req,res){
    if(//whatever boolean value==1)
    res.redirect("/useryes");
	else
    res.redirect("/userno");
});


app.listen(process.env.PORT, process.env.IP,function(){
    console.log("server started");
});
