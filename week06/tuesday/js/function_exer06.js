function setup() {
    createCanvas(600, 400);
}

function draw() {
    background('#f3ce57ff')
    for (let i = 0; i < 5; i++) {
        drawFish(100 + i * 90, 100 + i * 50, 40 + i * 10);
    }
}
function drawFish(x, y, size) {
    fill('#3fc1deff')
    ellipse(x, y, size, size * 0.6);
    fill('#2844f9ff')
    triangle(x - size / 2, y, x - size, y - size / 4, x - size, y + size / 4);
    fill('#000000');
    circle(x + size / 4, y - size / 6, size * 0.15);
}