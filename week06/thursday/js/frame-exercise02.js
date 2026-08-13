function setup() {
    createCanvas(500, 400);
}

function draw() {
    background(220);
    let baseSize = 150;
    let speed = 0.09;
    let amplitude = 50;

    let size = baseSize + sin(frameCount * speed) * amplitude;
    fill(100, 150, 250);
    circle(250, 200, size);
}
