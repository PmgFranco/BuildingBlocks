var express = require("express");
var app = express();
var port = 3000;

//Routing

app.get("/",function(req,res){

  res.json("Ok! Server is handling requests");


});


app.listen(port,function(){
  console.log("Initializating server at port: "+port);
});
