let balls = [];

function setup() {
    createCanvas(600, 450);

}

function mousePressed() {
    balls.push(
        {
            x: mouseX,
            y: mouseY,
            size: random(20, 50),
            speed: random(1, 5),
            r: random(0, 255),
            g: random(1, 200),
            b: random(59, 200),
        }
    );
}

function draw() {
    background('#111827');

    for (let ball of balls) {
        fill(ball.r, ball.g, ball.b)
        circle(ball.x, ball.y, ball.size);
        ball.y = ball.y + ball.speed;

        if (ball.y > height) {
            ball.y = 0;
            ball.x = random(width);
        }
    }
    fill('#fff');
    textSize(20);
    text("Balls:" + balls.length, 30, 40);
}