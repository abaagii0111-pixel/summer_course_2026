function setup() {
    createCanvas(600, 400);
    background("#a7a7a7ff")
}

function draw() {
    let rows = 5;
    let cols = 5;
    let size = 50;
    let gap = 15;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let x = 60 + c * (size + gap);
            let y = 60 + r * (size + gap);

            let red = 50 + r * 45;
            let green = c * 45;
            let blue = 180 - r * 20;

            fill(red, green, blue);
            stroke(0);
            strokeWeight(2);

            ellipse(x, y, size, size);
        }
    }

}