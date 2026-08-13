let snowflakes = [];

function setup() {
    createCanvas(600, 450);
    for (let i = 0; i < 40; i++) {
        let sz = random(3, 10);
        let spd = sz * 0.3;

        snowflakes.push({
            x: random(width),
            y: random(height),
            speed: spd,
            size: sz,
            drift: random(-0.5, 0.5)
        });
    }
}

function draw() {
    background('#00008B')
    for (let s of snowflakes) {
        fill('#fff');
        circle(s.x, s.y, s.size);
        s.y = s.y + s.speed;
        s.x = s.x + s.drift

        if (s.y > height) {
            s.y = 0;
            s.x = random(width);
        };
    }
}