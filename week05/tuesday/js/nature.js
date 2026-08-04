function setup() {
    createCanvas(900, 600);
}

function draw() {
    background(173, 216, 230);

    strokeWeight(6);
    fill(255, 255, 0);
    circle(800, 80, 110);

    fill(106, 53, 148);
    triangle(480, 420, 640, 180, 800, 420);
    triangle(270, 400, 440, 110, 580, 400);
    triangle(80, 410, 235, 170, 410, 410);

    fill(76, 175, 80);
    rect(30, 430, 850, 100)

    fill(105, 188, 70)
    arc(290, 428, 430, 200, PI, 0)
    arc(680, 428, 350, 250, PI, 0)
    arc(490, 428, 320, 160, PI, 0)


    fill(82, 110, 36);
    circle(170, 350, 80);
    circle(100, 325, 100);
    circle(750, 350, 80);
    circle(820, 325, 100);

    strokeWeight(4)
    fill(74, 47, 23);
    rect(157, 390, 20, 55);
    rect(87, 375, 24, 75);
    rect(808, 375, 24, 75);
    rect(738, 390, 20, 55);

    fill(102, 166, 39)
    arc(360, 428, 320, 120, PI, 0)
    rect(180, 410, 220, 30, 10);
    rect(450, 410, 220, 30, 10);

    fill(255)

    ellipse(80, 190, 70, 60);
    ellipse(150, 200, 80, 70);
    ellipse(195, 210, 85, 60);

    ellipse(370, 230, 65, 55);
    ellipse(410, 190, 60, 50);
    ellipse(445, 215, 65, 50);

    ellipse(580, 100, 75, 60);
    ellipse(635, 100, 95, 75);
    ellipse(710, 100, 70, 55);
    ellipse(525, 90, 65, 50);
}
