var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 8000;
// var express = require('express');
//var app = express();

//var express = require('express');
//var app = express();
//var server = require('http').Server(app);
//var io = require('socket.io').listen(server);
/*TODO QUEDE aqui
var mongo = require('mongodb').MongoClient;
var quickselect = require('quickselect'); // Used to compute the median for latency

var mapFormat = require('./js/server/format.js');
var gs = require('./js/server/GameServer.js').GameServer;
// For the binary protocol of update packets :
var CoDec = require('./js/CoDec.js').CoDec;
var Encoder = require('./js/server/Encoder.js').Encoder;

server.enableBinary = true;
gs.server = server;
//Serve static content for the app from the "public" directory in the application directory.

    // GET /style.css etc
    app.use(express.static(__dirname + '/js'));
    app.use(express.static(__dirname + '/assets'));
// Mount the middleware at "/static" to serve static content only when their request path is prefixed with "/static".

 

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.lastPlayderID = 0;
*/
io.on('connection', function(socket){
 
 socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
 
 
    socket.on('newplayer',function(){
        socket.player = {
            id: server.lastPlayderID++,
            x: randomInt(100,400),
            y: randomInt(100,400)
        };
        socket.emit('allplayers',getAllPlayers());
        socket.broadcast.emit('newplayer',socket.player);

        socket.on('click',function(data){
            console.log('click to '+data.x+', '+data.y);
            socket.player.x = data.x;
            socket.player.y = data.y;
            io.emit('move',socket.player);
        });

        socket.on('disconnect',function(){
            io.emit('remove',socket.player.id);
        });
    });

    socket.on('test',function(){
        console.log('test received');
    });
});

function getAllPlayers(){
    var players = [];
    Object.keys(io.sockets.connected).forEach(function(socketID){
        var player = io.sockets.connected[socketID].player;
        if(player) players.push(player);
    });
    return players;
}

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}
http.listen(port, function() {
    console.log("App is running on port " + port);
});
 
