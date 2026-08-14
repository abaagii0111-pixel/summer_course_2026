function setup() {
    createCanvas(600, 600);
}

function draw() {
    background('#1d1d1dff');

    let centerX = width / 2;
    let centerY = height / 2;
    let sunSize = 90;

    fill('#fffb05ff');
    noStroke();
    ellipse(centerX, centerY, sunSize, sunSize);

    let radius1 = 140;
    let angle1 = frameCount * 0.03;

    let planet1X = centerX + cos(angle1) * radius1;
    let planet1Y = centerY + sin(angle1) * radius1;

    noFill();
    stroke(200);
    ellipse(centerX, centerY, radius1 * 2, radius1 * 2);

    fill(0, 150, 255);
    noStroke();
    ellipse(planet1X, planet1Y, 40, 40);

    let radius2 = 250;
    let angle2 = frameCount * 0.015;

    let planet2X = centerX + cos(angle2) * radius2;
    let planet2Y = centerY + sin(angle2) * radius2;

    noFill();
    stroke(200);
    ellipse(centerX, centerY, radius2 * 2, radius2 * 2);

    fill(230, 80, 50);
    noStroke();
    ellipse(planet2X, planet2Y, 29, 29);
}