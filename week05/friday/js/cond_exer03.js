let doorX = 250;
let doorY = 200;
let doorWidth = 100;
let doorHeight = 150;
let doorColor = "#8b4513";
function setup() {
    createCanvas(700, 450);
}
function draw() {
    background("#87ceeb");
    fill("#99a573ff")
    rect(105, 90, 400, 276)
    let isMouseOnDoor = mouseX > doorX && mouseX < doorX + doorWidth && mouseY > doorY && mouseY < doorY + doorHeight;
    if (isMouseOnDoor && mouseIsPressed) {
        doorColor = "#2ecc71";
    } else if (isMouseOnDoor) {
        doorColor = "#f1c40f";
    } else {
        doorColor = "#8b4513";
    }
    fill(doorColor)
    rect(doorX, doorY, doorWidth, doorHeight)
    if (isMouseOnDoor && mouseIsPressed) {
        fill("#ffffff");
        textSize(20);
        textAlign(CENTER, CENTER);
        text("OPEN", doorX + doorWidth / 2, doorY + doorHeight / 2);
    }
fill("#ff0000ff")
triangle(75, 90, 535, 90, 305, 1);

}