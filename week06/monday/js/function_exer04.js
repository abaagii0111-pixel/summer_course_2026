function setup() {
    createCanvas(600, 400);
}
function draw() {
    background("#f5f5f5");
    drawBall(100, 100, 30);
    drawBall(100, 200, 70 );
    drawBall(100, 300, 110);
}
function drawBall(x, y, size) {
    fill("#fb6565ff");
    circle(x, y, size);
}    