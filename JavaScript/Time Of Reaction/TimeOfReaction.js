var canv = document.getElementById('canvas');
var ctx = canv.getContext('2d');
var startTime = new Date().getTime();

///////////////////* Figures *///////////////////

var x = Math.floor(Math.random() * 70) + 45,
  y = Math.floor(Math.random() * 50),
  w = Math.floor(Math.random() * 200) + 75,
  h = Math.floor(Math.random() * 200) + 75,
  radius = Math.floor(Math.random() * 75),
  radiusX = Math.floor(Math.random() * 60) + 20,
  radiusY = Math.floor(Math.random() * 60) + 20;

function getRandomColor() {
  var letters = "0123456789ABCDEF".split('');
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};



function rectangle() {
  ctx.fillRect(x, y, w, h);
  ctx.fillStyle = getRandomColor();
};

function circle() {
  ctx.fillStyle = getRandomColor();
  ctx.beginPath();
  ctx.arc(75, 75, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
};

function ellipse() {
  ctx.fillStyle = getRandomColor();
  ctx.beginPath();
  ctx.ellipse(100, 100, radiusX, radiusY, 50, 0, 300, false);
  ctx.stroke();
  ctx.fill();
};

function triangle() {
  ctx.fillStyle = getRandomColor();
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(25, 100);
  ctx.lineTo(75, 100);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
};

function trapezoid() {
  var c = Math.floor(Math.random() * 200) + 10,
    d = Math.floor(Math.random() * 200) + 10,
    j = Math.floor(Math.random() * 200) + 10,
    i = Math.floor(Math.random() * 200) + 10;
  console.log(c, d, j, i);

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + c, y);
  ctx.lineTo(x + d, y - j);
  ctx.lineTo(x - i, y - j);
  ctx.closePath();
  ctx.stroke();
  ctx.fillStyle = getRandomColor();
  ctx.fill();
};

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * max + min);
};

function figures() {
  var div = document.getElementById('div');

  div.style.top = Math.floor(Math.random() * 550) + "px";
  div.style.left = Math.floor(Math.random() * 1350) + "px";

  var shapes = [rectangle, circle, ellipse, triangle, trapezoid];
  var randomIndex = getRandomNumber(0, shapes.length);
  shapes[randomIndex]();
  
  div.style.display = "block";
  startTime = new Date().getTime();
};

setTimeout(figures, Math.random() * 1000);

div.onclick = function() {
  var div = document.getElementById('div');

  ctx.clearRect(0, 0, canv.width, canv.height);
  div.style.display = "none";
  var finishTime = new Date().getTime();
  var reactionTime = (finishTime - startTime) / 1000;
  document.getElementById("timer").innerHTML = reactionTime.toFixed(3) + " seconds."
  setTimeout(figures, Math.random() * 3000);
};