let boxSize = 45;
let startX = 60;
let gap = 70;
function setup() {
    createCanvas(800, 400);
    rectMode(CENTER);
}
function draw() {
    background("#f5f5f5");

    for (let i = 0; i < 10; i++) {
        let x = startX + i * gap;
        let smallBox = 25;

        fill("#3498db");
        rect(x, 80, smallBox, smallBox);
    }

    for (let i = 0; i < 10; i++) {
        let x = startX + i * gap;

        fill("#e67e22 ");
        rect(x, 160, boxSize, boxSize);
    }

    for (let i = 0; i < 10; i++) {
        let x = startX + i * gap;
        let largeBox = 65;

        fill("#2ecc71");
        rect(x, 240, largeBox, largeBox);
    }

    for (let i = 0; i < 10; i++) {
        let x = startX + i * gap;

        fill("#ff0000ff");
        rect(x, 320, boxSize, boxSize);
    }
}