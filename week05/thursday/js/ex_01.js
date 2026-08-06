let circleX;
let circleY;
let circleSize = 120; 
let circleColor = "#e74c3c";

function setup() {
    createCanvas(600, 400);
}

function draw() {
    circleX = mouseX;
  circleY = mouseY;
    background("#f5f5f5");
    fill("#e74c3c");
    circle(circleX, circleY, circleSize);
}


