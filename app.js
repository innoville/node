var express = require('express');
var app = express();
//var mysql = require('mysql');
//var aws = require('aws-sdk');
//var rds = new aws.rds();

/*
var host = "aurora-cluster.cluster-c1uvq3j2zs5y.us-east-1.rds.amazonaws.com"; 
var database = "aurora";
var user = "yong";
var password = "11111111";
var connection = mysql.createConnection({
  host: host,
  user: user, 
  password: password,
  port: 3306 
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
*/

app.get('/', function (req, res){
  console.log(__dirname);
  res.sendFile(__dirname+'/index.html');
});
app.listen(8080, function(){
  console.log('APP Listening on port 8080');
});
