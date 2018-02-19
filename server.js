var http=require('http');

http.createServer(function(req, res){
  //res.sendFile('index.html');
  res.write("HELLO");
  res.end();
}).listen(8080);
