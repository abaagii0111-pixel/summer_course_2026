function setup() {
    createCanvas(600, 400);
}
function draw() {
    background("#f5f5f5");
    drawBall(100, 100);
    drawBall(100, 200);
    drawBall(100, 300);
}
function drawBall(x, y) {
    fill("#fb6565ff");
    circle(x, y, 70);
}