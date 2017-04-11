var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

// Testing if server is working
app.get("/", function(req, res){
  res.send("Server is working properly");
});

// Port to listen to
app.listen(PORT, function(){
  console.log("This app is running on port " + PORT );
});
