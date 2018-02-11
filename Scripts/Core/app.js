var canvas;
var ctx;
function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 640, 580);
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.arc(200, 200, 100, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.restore();
}
window.onload = function () {
    canvas = document.getElementById("cnvs");
    ctx = canvas.getContext("2d");
    gameLoop();
};
//# sourceMappingURL=app.js.map