function setup() {
    createCanvas(3000, 400);
}
function draw() {
    background("#f5f5f5");
    drawHouse(100, 200);
    drawHouse(500, 200);
}
function drawHouse(x, y) {

    strokeWeight(5);
    fill('#7256567f')
    rect(x, y, 150, 120);

    fill('#fff')
    rect(x + 15, y + 25, 30, 30);
    rect(x + 105, y + 25, 30, 30);

    fill('#e1ff00a2')
    triangle(x - 10, y, x + 75, y - 60, x + 160, y);
    
    fill('#2394b34f')
    rect(x + 60, y + 60, 30, 60);
}    