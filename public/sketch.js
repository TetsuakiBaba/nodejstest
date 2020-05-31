var socket;

function setup() {
  createCanvas(400, 400);
  background(100);
  socket = io.connect('https://simplenodejs.glitch.me:3000');
  socket.on('mouse', newDrawing);
}

function newDrawing(data)
{
  noStroke();
  fill(255);
  ellipse(data.x, data.y, 60,60);
}

function mouseDragged()
{
  console.log('Sending: ' + str(mouseX) + ',' + str(mouseY));
  var data = {x:mouseX, y:mouseY}
  socket.emit('mouse', data);

  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 60,60);
}

function draw() {
  
}