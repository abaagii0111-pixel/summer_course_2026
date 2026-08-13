function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);

    let y = sin(frameCount * 0.05)* 50 + 200;
     fill(255, 100, 100, 150);
     circle(y, 200, 40);
}