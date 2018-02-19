var express = require('express');
var app = express();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT
});

console.log(process.env.RDS_USERNAME);

connection.connect(function(err){
  if(err) {
    console.log("DB Connection Error");
    return;
  }
  console.log("DB Connected");
});
connection.end();
app.get('/', function (req, res){
  console.log(__dirname);
  res.sendFile(__dirname+'/index.html');
});
app.listen(8080, function(){
  console.log('APP Listening on port 8080');
});
