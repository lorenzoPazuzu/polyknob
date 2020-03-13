const rotaryEncoder = require('./rotatoryE');

const express = require('express');
// changed 'io' with 'socket'
const socket = require('socket.io');

const bodyParser = require('body-parser')
const path = require('path');
//APP setup
const app = express();
var server = app.listen(8080, function(){
  console.log("listening to request on port 8080")
});
const five = require("johnny-five");
const board = new five.Board();

// Socket setup
var io = socket(server);

io.on('connection', function(socket){
  console.log('made socket connection', socket.id)
})
io.listen(8000);

//Static files
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', '/src/index.html'));
});


val=0;

var enc_val = '';

board.on('ready', () => {

  const upButton = new five.Button(13);
  const downButton = new five.Button(12);
  const pressButton = new five.Button(11);

  rotaryEncoder({
    upButton,
    downButton,
    pressButton,
    onUp: () => {
      enc_val='down';
      console.log('down');
      sendVal(enc_val);
    },
    onDown: () => {
      enc_val='up';
      console.log('up');  
      sendVal(enc_val);
    },
    onPress: () => {
      enc_val='press';
      console.log('press');   
      sendVal(enc_val);
    },
  });

});

io.on('connection', (client) => {
  sendVal = (data) => {
    client.emit('timer', enc_val);
  }
})

/*
io.on('connection', (client) => {
client.on('subscribeToTimer', (interval) => {
  console.log('client is subscribing to timer with interval ', interval);
  setInterval(() => {
    client.emit('timer', enc_val);
    client.emit('change', enc_change);
  }, interval);
});
});
*/