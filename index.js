var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var exec = require('child_process').exec;
//the command to run
var cmd = './root/minecraft/rendermap.sh';

var exec = require('child_process').exec;
var cmd = '';

exec(cmd, function(error, stdout, stderr) {
  // command output is in stdout
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){

    exec(cmd, function(error, stdout, stderr) {
      // command output is in stdout
      io.emit('chat message', stdout);
    });

  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
