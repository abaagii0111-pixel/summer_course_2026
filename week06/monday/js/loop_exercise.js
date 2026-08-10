function setup() {
    createCanvas(800, 300);
}
function draw() {
    background("#f5f5f5");
    fill("#3498db");
    noStroke();
    for (let i = 0; i < 10; i++) {
        let x = 50 + i * 75;
        let size = 80 - i * 6;

        fill(i * 0, 255, 255);
        circle(x, height / 2, size);
    }

}