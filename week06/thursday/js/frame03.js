function setup() {
    createCanvas(400, 400);
}

function draw() {
    let size = (frameCount * 1.5) % 90 + 10
    background(220);

    fill(100, 150, 255);
    circle(200, 150, size)


}