console.log("HA GADEE");
var c = document.getElementById("myCanvas");
var t = document.getElementById("meCanvas");
var r = document.getElementById("maCanvas");
var ctx = c.getContext("2d");
var x = t.getContext("2d");
var a = r.getContext("2d")

ctx.moveTo(50,50);
ctx.lineTo(250,250);
ctx.moveTo(250,50);
ctx.lineTo(50,250);
ctx.stroke();
ctx.strokeStyle = "rgb(100,255,200)";
ctx.lineWidth = 5;
ctx.stroke();

ctx.fillStyle = "cyan";
ctx.fillRect(100, 100, 100, 100);

ctx.strokeStyle = "cyan";
ctx.strokeRect(50,50,200,200);

ctx.clearRect(125,125,50,50);

x.fillStyle = "cyan";
x.fillRect(0,0,150,150);
x.fillRect(150,150,150,150);

a.fillStyle = "cyan";
a.fillRect(0,0,150,150);
a.fillRect(150,150,150,150);
a.fillRect(150,0,150,150);
a.fillRect(0,150,150,150);
a.clearRect(20,20,125,125);