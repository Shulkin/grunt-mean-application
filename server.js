var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.sendFile("./public/views/index.html");
});

app.listen(3000);
console.log("Server started at port 3000");
