function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(200);

    fill(255, 204, 0);
    circle(200, 200, 200);

    fill(255, 153, 153);
    noStroke();
    ellipse(140, 230, 35, 25);
    ellipse(260, 230, 35, 25);

    stroke(50);
    strokeWeight(4);
    fill(40)
    arc(150, 190, 40, 40, PI, HALF_PI);
    arc(250, 190, 40, 40, PI, HALF_PI);


    stroke(0);
    strokeWeight(3);
    arc(200, 250, 90, 40, 0, PI);
}