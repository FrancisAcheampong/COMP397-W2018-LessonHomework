var canvas:HTMLCanvasElement;
var ctx:CanvasRenderingContext2D;

function gameLoop():void {
requestAnimationFrame(gameLoop);
ctx.fillStyle="black";
ctx.fillRect(0,0,640,580);

ctx.save();
ctx.beginPath();
ctx.strokeStyle ="red";
ctx.lineWidth=5;
ctx.arc(200,200,100,0,2*Math.PI);
ctx.stroke();
ctx.restore();
}

window.onload=()=> {
canvas =<HTMLCanvasElement>document.getElementById("cnvs");
ctx =  canvas.getContext("2d");
gameLoop();
};