function setup() {
    createCanvas(500, 400);
}

function draw() {
    background("#000")

    if (frameCount % 20 < 10) {
        fill(255, 220, 0);
    } else {
        fill(80);
    }
    circle(width / 2, height / 2, 150);
}   
