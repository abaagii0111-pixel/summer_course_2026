function setup() {
    createCanvas(600, 400);
}

function draw() {
    background('#e8b50eff')
    drawBall(100, 200, 50, 255, 0, 0);
    drawBall(150, 250, 50, 0, 255, 0);
    drawBall(200, 300, 50, 0, 0, 255);
    drawBall(50, 150, 50, 135, 206, 235);
    drawBall(250, 350, 50, 128, 0, 128);
}

function drawBall(x, y, size, r, g, b) {
    fill(r, g, b)
    circle(x, y, size)
}
