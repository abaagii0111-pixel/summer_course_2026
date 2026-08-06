let buttonX = 200;
let buttonY = 150;
let buttonWidth = 200;
let buttonHeight = 80;
function setup() {
    createCanvas(600, 400);
    textAlign(CENTER, CENTER);
    textSize(25);
}
function draw() {
    background("#fff")

    if (isMouseInside && mouseIsPressed) {
        fill("#3498db");
    }
    else if (isMouseInside) {
        fill("#2ecc71")
    } else {
        fill(" #1e8449")
    }

    noStroke();
    rect(buttonX, buttonY, buttonWidth, buttonHeight);

    fill(255);
    text("START", buttonX + buttonWidth / 2, buttonY + buttonHeight / 2);

}