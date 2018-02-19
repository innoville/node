var http=require('http');

http.createServer(function(req, res){
  res.sendFile('index.html');
  res.end();
});
