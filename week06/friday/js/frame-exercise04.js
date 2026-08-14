function setup() {
    createCanvas(800, 400);
}

function draw() {
    background(30);

    let centerY = height / 2;
    let speed = 0.05;
    let amplitude = 60;

    for (let i = 0; i < 10; i++) {
        let x = map(i, 0, 9, 100, width - 100);


        let y = centerY + sin(frameCount * speed + i * 0.5) * amplitude;

        let r = map(i, 0, 9, 100, 255);
        let g = map(sin(frameCount * 0.05 + i), -1, 1, 100, 255);
        let b = 255;
        fill(r, g, b);
        noStroke();

        let size = 30 + sin(frameCount * speed + i) * 10;

        ellipse(x, y, size, size);
    }
}