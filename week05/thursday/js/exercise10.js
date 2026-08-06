let targetX = 100;
let targetY = 200;
let targetSize = 70;
let targetSpeed = 4;
let score = 0;
let lives = 3;
let gameState = "playing";

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(220);

    if (gameState === "playing") {

        targetX += targetSpeed;


        if (targetX < targetSize / 2 || targetX > width - targetSize / 2) {
            targetSpeed *= -1;
        }


        fill(255, 0, 0);
        ellipse(targetX, targetY, targetSize);


        fill(0);
        textSize(18);
        text("Score: " + score, 20, 30);
        text("Lives: " + lives, 20, 60);

    } else if (gameState === "gameOver") {

        fill(255, 0, 0);
        textSize(36);
        textAlign(CENTER, CENTER);
        text("GAME OVER", width / 2, height / 2);

        textSize(18);
        fill(0);
        text("Double click to restart", width / 2, height / 2 + 40);


        textAlign(LEFT, BASELINE);
    }
}

function mousePressed() {

    if (gameState === "playing") {
        let d = dist(mouseX, mouseY, targetX, targetY);

        if (d < targetSize / 2) {

            score += 1;

            if (targetSpeed > 0) {
                targetSpeed += 1;
            } else {
                targetSpeed -= 1;
            }

            targetY = random(targetSize, height - targetSize);
        } else {

            lives -= 1;


            if (lives <= 0) {
                gameState = "gameOver";
            }
        }
    }
}

function doubleClicked() {

    targetX = 100;
    targetY = 200;
    targetSpeed = 4;
    score = 0;
    lives = 3;
    gameState = "playing";
}