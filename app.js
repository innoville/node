var express = require('express');
var app = express();
app.get('/', function (req, res){
  console.log(__dirname);
  res.sendFile(__dirname+'/index.html');
});
app.listen(8080, function(){
  console.log('APP Listening on port 8080');
});
