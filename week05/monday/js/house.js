function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(173, 216, 230);

    fill(255, 255, 0);
    circle(350, 60, 90);
    
    strokeWeight(5);
    fill(255, 224, 189);
    square(90, 170, 220);

    fill(173, 216, 230);
    square(110, 230, 60);

    square(230, 230, 60);

    fill(255, 0, 0);
    triangle(200, 100, 70, 180, 330, 180);

    fill(90, 40, 15);
    rect(170, 290, 60, 100);
}
