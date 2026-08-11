let drops = [];

function setup() {
    createCanvas(400, 400);
    for (let i = 0; i < 20; i++) {
        drops.push({
            x: random(width),
            y: random(height),
            speed: random(1, 3),
            size: random(20, 50)
        });
    }
}

function draw() {
    background('#f67272ff')
    for (let d of drops) {
        createParticles(d.x, d.y, d.size);

        d.y += d.speed;
        if (d.y > height) {
            d.y = 0;
            d.x = random(width);
        }
    }
}
function createParticles(x, y, size) {
    fill(0, 150, 255);
    noStroke();
    circle(x, y, size);
}