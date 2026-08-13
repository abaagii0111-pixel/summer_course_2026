function setup() {
    createCanvas(600, 350);
}

function draw() {
    background(220);
    fill('#0000FF');
    noStroke();
    let x = frameCount;
    let y = 175;
    circle(x, y, 60)
}
