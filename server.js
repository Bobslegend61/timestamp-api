var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;

// Setting static files
app.use(express.static(path.join(__dirname, "client")));

// api for all urls and "/"
app.get("/", function(req, res){
  res.sendFile("index.htlm");
});

// api for url parameter
app.get("/:"+ encodeURIComponent("date"), function(req, res){
  var parameter = req.params.date;
  var checkParams = isNaN(parameter)? parameter : Number(parameter);
  var date = new Date(checkParams);
  var normal;
  var unix;

  if(date.getDate()){
    if(isNaN(checkParams)){
      console.log("Correct");
      normal = date.toDateString();
      unix = Math.round(date.getTime()/1000);
    }else{
      normal = date.toDateString();
      unix = date.getTime();
    }
  }else{
    normal = null;
    unix = null;
  }

  res.json({
    natural: normal,
    unix: unix
  });
});

// Port to listen to
app.listen(PORT, function(){
  console.log("This app is running on port " + PORT );
});
