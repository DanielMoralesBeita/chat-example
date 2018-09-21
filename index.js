var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
var port = process.env.PORT || 8000;
 

server.listen(port, function() {
    console.log("App is running on port " + port);
});
/*http.listen(2000, function(){
  console.log('listening on web *:2000');
});*/
