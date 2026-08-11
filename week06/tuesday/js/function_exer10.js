function setup() {
    createCanvas(600, 400);
}

function draw() {
    background('#f1f9deef');
    drawRobot(100, 200, 100, 225, 80, 80);
    drawRobot(300, 220, 90, 200, 200, 80);
    drawRobot(500, 200, 90, 200, 80, 255);
}

function calculateHeadSize(bodySize) {
    return bodySize * 0.6;
}

function drawRobot(x, y, bodySize, r, g, b) {
    let headSize = calculateHeadSize(bodySize);

   rectMode(CENTER);
    fill(r, g, b);
    rect(x, y, bodySize, bodySize);

    let headY = y - bodySize / 2 - headSize / 2;
    rect(x, headY, headSize, headSize);

    fill('#000000ff');
    circle(x - headSize / 3, headY, headSize * 0.20);
    circle(x + headSize / 5, headY, headSize * 0.20);

    fill(150);
    rect(x - bodySize / 2 - bodySize * 0.2, y, bodySize * 0.4, bodySize * 0.18);
    rect(x + bodySize / 2 + bodySize * 0.2, y, bodySize * 0.4, bodySize * 0.18);

    rect(x - bodySize / 4, y + bodySize / 2 + bodySize * 0.25, bodySize * 0.2, bodySize * 0.5);
    rect(x + bodySize / 4, y + bodySize / 2 + bodySize * 0.25, bodySize * 0.2, bodySize * 0.5);



}