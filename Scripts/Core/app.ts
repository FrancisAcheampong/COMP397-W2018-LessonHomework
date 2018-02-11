let canvas:any;
let ctx:CanvasRenderingContext2D;
let stage:createjs.Stage;

function Start():void {
canvas = document.getElementById("cnvs");
stage = new createjs.Stage(canvas);
createjs.Ticker.framerate =60;
createjs.Ticker.on("tick",Update);
}

function Update(): void {
stage.update();
}
function Main(): void {
console.log("try main");
}
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