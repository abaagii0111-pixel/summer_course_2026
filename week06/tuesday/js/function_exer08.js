function setup() {
    createCanvas(600, 350);
}
function draw() {
    background("#f5f5f5");
    fill('rgba(0, 0, 255, 1)')
    let size1 = calculateSize(3);
    let size2 = calculateSize(4);
    circle(200, 200, size1);
    circle(400, 100, size2);
}
function calculateSize(number) {
    return number * 20
}