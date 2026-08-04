let size = 50;
let spacing = 20;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);

    fill(106, 53, 148);

    let startX = 50;
    let y = 150;


    rect(startX, y, size, size);

    rect(startX + size + spacing, y, size, size);
    rect(startX + (size + spacing) * 2, y, size, size);


    rect(startX + (size + spacing) * 3, y, size, size)
}