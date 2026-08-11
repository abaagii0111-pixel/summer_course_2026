let balls = [
    { x: 100, y: 100, speed: 2 },
    { x: 300, y: 100, speed: 3 }
]

function setup() {
    createCanvas(600, 600);
    background('#1b5411ff')
}

function draw() {
    for (let i = 0; i < balls.length; i++) {
        fill(255, 0, 0);
        circle(balls[i].x, balls[i].y, 30);
        balls[i].x = balls[i].x + balls[i].speed
    }
}