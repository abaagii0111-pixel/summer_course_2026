
let x = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255, 0, 0);

    circle(x, 200, 50);

    x = x + 1;
}

