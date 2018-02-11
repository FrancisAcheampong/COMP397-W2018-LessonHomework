var canvas;
// let ctx:CanvasRenderingContext2D;
var stage;
var helloLabel;
function Start() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", Update);
    Main();
}
function Update() {
    helloLabel.rotation += 10;
    stage.update();
}
function Main() {
    console.log("try main");
    helloLabel = new createjs.Text("Hello World!", "40px consolas", "#000000");
    helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
    helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    helloLabel.x = 320;
    helloLabel.y = 240;
    stage.addChild(helloLabel);
}
/*<function gameLoop():void {
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
}*/
window.onload = Start;
// window.onload=()=>Start; // {
// canvas =<HTMLCanvasElement>document.getElementById("cnvs");
// ctx =  canvas.getContext("2d");
// gameLoop();
// }; 
//# sourceMappingURL=app.js.map