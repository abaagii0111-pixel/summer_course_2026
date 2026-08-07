let lightColor = "#555555";
let roomColor = "#222222";
function setup() {
    createCanvas(600, 400)
}
function draw() {
    if (mouseIsPressed) {
        roomColor = "#fff3b0"
        lightColor = "#ffd60a"
    } else {
        roomColor = "#222222"
        lightColor = "#555555"
    }
    background(roomColor)

    fill(lightColor);
    noStroke();
    circle(300, 110, 60);

    fill("#8b4513");
    rect(135, 300, 310, 30);
    rect(143, 320, 25, 90);
    rect(413, 320, 25, 90);

    textAlign(CENTER, CENTER);
    if (mouseIsPressed) {
        fill("#d4ac0d");
        text("LIGHT ON", 300, 220);
    } else {
        fill("#ffffff");
        text("LIGHT OFF", 300, 240);
    }
}