let score = 0;
let lives = 3;
let gameState = "start";

let player = {
    x: 750,
    y: 860,
    w: 140,
    h: 45,
    speed: 13
};

let foods = [];
let numFoods = 17;

let touchDir = 0;

let leftBtnHeld = false;
let rightBtnHeld = false;

let goodEmojiList = ["🍎", "🍕", "🍔", "🍓", "🍩", "🍧", "🌮", "🍰"];
let badEmojiList = ["💣", "💩", "🦠"];
let powerUpEmojiList = ["⚡", "🧊"];

let slowTimer = 0;
let freezeTimer = 0;

function setup() {
    let canvas = createCanvas(1500, 940);

    canvas.elt.tabIndex = 0;
    canvas.elt.focus();

    textFont("'Comic Sans MS', 'Chalkboard SE', 'Segoe UI', Arial, sans-serif");

    for (let i = 0; i < numFoods; i++) {
        foods.push(createRandomFood());
    }

    setupMobileControls();
}

// Хоёр удаа зурах аргаар текстэд контур нэмж харагдах болгоно
function drawTextOutline(txt, x, y, outlineColor) {
    if (outlineColor) {
        fill(outlineColor);
    } else {
        fill(0, 0, 0, 220);
    }
    for (let dx = -3; dx <= 3; dx += 3) {
        for (let dy = -3; dy <= 3; dy += 3) {
            if (dx === 0 && dy === 0) continue;
            text(txt, x + dx, y + dy);
        }
    }
}


function setupMobileControls() {
    let leftBtn = document.getElementById('btnLeft');
    let rightBtn = document.getElementById('btnRight');

    function pressLeft(e) {
        e.preventDefault();
        leftBtnHeld = true;
        updateButtonDir();
    }
    function pressRight(e) {
        e.preventDefault();
        rightBtnHeld = true;
        updateButtonDir();
    }
    function releaseBtn() {
        leftBtnHeld = false;
        rightBtnHeld = false;
        updateButtonDir();
    }

    leftBtn.addEventListener('pointerdown', pressLeft);
    rightBtn.addEventListener('pointerdown', pressRight);

    for (let btn of [leftBtn, rightBtn]) {
        btn.addEventListener('pointerup', releaseBtn);
        btn.addEventListener('pointercancel', releaseBtn);
        btn.addEventListener('pointerleave', releaseBtn);
    }
}

function updateButtonDir() {
    if (rightBtnHeld) {
        touchDir = 1;
    } else if (leftBtnHeld) {
        touchDir = -1;
    } else {
        touchDir = 0;
    }
}
function draw() {
    clear();

    if (gameState === "start") {

    } else if (gameState === "playing") {
        if (slowTimer > 0) slowTimer--;
        if (freezeTimer > 0) freezeTimer--;

        movePlayer();
        drawPlayer();

        for (let i = 0; i < foods.length; i++) {
            updateFood(foods[i]);
            drawFood(foods[i]);

            if (checkCollision(foods[i])) {
                if (foods[i].type === "powerup") {
                    if (foods[i].symbol === "⚡") {
                        slowTimer = 5 * 60;
                    } else if (foods[i].symbol === "🧊") {
                        freezeTimer = 5 * 60;
                    }
                } else if (foods[i].type === "good") {
                    score += 10;
                } else {
                    lives -= 1;
                    if (lives <= 0) {
                        gameState = "gameover";
                    }
                }
                foods[i] = createRandomFood();
            }
            else if (foods[i].y > height) {
                foods[i] = createRandomFood();
            }
        }

        drawHUD();

    } else if (gameState === "gameover") {
        drawGameOver();
    }
}

function createRandomFood() {   ``
    let isGood;
    let foodType;
    let foodSymbol;

    if (random(1) < 0.12) {
        foodType = "powerup";
        foodSymbol = random(powerUpEmojiList);
    } else {
        isGood = random(1) > 0.3;
        foodType = isGood ? "good" : "bad";
        foodSymbol = isGood ? random(goodEmojiList) : random(badEmojiList);
    }

    return {
        x: random(55, width - 55),
        y: random(-450, -30),
        speed: random(3, 7.5),
        size: random(60, 80),
        type: foodType,
        symbol: foodSymbol
    };
}

function drawPlayer() {
    push();
    rectMode(CENTER);
    ellipseMode(CENTER);

    noFill();
    stroke('#3b2b2b');
    strokeWeight(8);
    arc(player.x, player.y - player.h / 2, player.w - 20, player.h + 50, PI, TWO_PI);

    fill('#391c1c');
    stroke(101, 67, 33);
    strokeWeight(3);

    beginShape();
    vertex(player.x - player.w / 2, player.y - player.h / 2);
    vertex(player.x + player.w / 2, player.y - player.h / 2);
    vertex(player.x + player.w / 2 - 15, player.y + player.h / 2);
    vertex(player.x - player.w / 2 + 15, player.y + player.h / 2);
    endShape(CLOSE);


    fill(130, 69, 19);
    ellipse(player.x, player.y - player.h / 2, player.w, 14);


    stroke(101, 67, 33);
    strokeWeight(2);

    for (let offset = -player.w / 3; offset <= player.w / 3; offset += 20) {
        line(player.x + offset, player.y - player.h / 2 + 5, player.x + offset * 0.8, player.y + player.h / 2 - 2);
    }
    line(player.x - player.w / 2 + 8, player.y, player.x + player.w / 2 - 8, player.y);

    pop();
}

function movePlayer() {
    let left = touchDir === -1;
    let right = touchDir === 1;

    if (
        keyIsDown(LEFT_ARROW) ||
        (keyIsPressed && (key === 'a' || key === 'A' || key === 'ф' || key === 'Ф'))
    ) {
        left = true;
    }

    if (
        keyIsDown(RIGHT_ARROW) ||
        (keyIsPressed && (key === 'd' || key === 'D' || key === 'в' || key === 'В'))
    ) {
        right = true;
    }

    if (left && player.x - player.w / 2 > 0) {
        player.x -= player.speed;
    }

    if (right && player.x + player.w / 2 < width) {
        player.x += player.speed;
    }
}

function touchStarted() {
    if (gameState === "start") {
        if (mouseX > 550 && mouseX < 950 && mouseY > 520 && mouseY < 680) {
            gameState = "playing";

            // PLAY дарахад CSS class нэмж арын зургийг сэлгэнэ
            select('canvas').addClass('game-bg');
        }
    } else if (gameState === "gameover") {
        resetGame();
    }
    return false;
}


function mousePressed() {
    touchStarted();
    if (gameState === "start") {
        if (mouseX > 550 && mouseX < 950 && mouseY > 520 && mouseY < 680) {
            gameState = "playing";
        }
    }
}

function touchMoved() {
    if (gameState === "playing") {
        updateTouchDir();
    }
    return false;
}

function touchEnded() {
    if (!leftBtnHeld && !rightBtnHeld) {
        touchDir = 0;
    }
    return false;
}

function updateTouchDir() {
    if (touches.length > 0) {
        touchDir = touches[0].x < width / 2 ? -1 : 1;
    }
}

function drawFood(food) {
    textSize(food.size);
    textAlign(CENTER, CENTER);
    text(food.symbol, food.x, food.y);
}

function updateFood(food) {
    if (freezeTimer > 0) {
        return;
    }
    let spd = food.speed;
    if (slowTimer > 0) {
        spd *= 0.5;
    }
    food.y += spd;
}

function checkCollision(food) {
    let d = dist(player.x, player.y, food.x, food.y);
    return d < (player.w / 3 + food.size / 2);
}

function drawHUD() {
    textStyle(BOLD);
    textAlign(LEFT, TOP);
    textSize(36);

    let effectOffset = 0;
    if (windowWidth <= 1292) {
        effectOffset = 25;
    }

    drawTextOutline(`Оноо: ${score}`, 30, 30);
    drawTextOutline(`Амь: ${lives}`, 30, 75);
    if (slowTimer > 0) {
        let label = `⚡ Slow Motion: ${ceil(slowTimer / 60)}s`;
        drawTextOutline(label, 30, 165 + effectOffset, '#0004ff');
    }
    if (freezeTimer > 0) {
        let label = `🧊 Freeze: ${ceil(freezeTimer / 60)}s`;
        drawTextOutline(label, 30, 210 + effectOffset, '#0004ff');
    }

    fill(255);
    text(`Оноо: ${score}`, 30, 30);
    text(`Амь: ${lives}`, 30, 75);
    if (slowTimer > 0) {
        fill(255);
        text(`⚡ Slow Motion: ${ceil(slowTimer / 60)}s`, 30, 165 + effectOffset);
    }
    if (freezeTimer > 0) {
        fill(255);
        text(`🧊 Freeze: ${ceil(freezeTimer / 60)}s`, 30, 210 + effectOffset);
    }
}

function drawGameOver() {
    push();
    rectMode(CORNER);
    noStroke();
    fill(0, 0, 0, 140);
    rect(0, 0, width, height);
    pop();

    textStyle(BOLD);
    textAlign(CENTER, CENTER);

    textSize(70);
    drawTextOutline("Тоглоом дууслаа", width / 2, height / 2 + 140, '#0004ff');
    fill(255);
    text("Тоглоом дууслаа", width / 2, height / 2 + 140);

    textSize(55);
    drawTextOutline(`Сүүлийн оноо: ${score}`, width / 2, height / 2 + 240, '#0004ff');
    fill(255);
    text(`Сүүлийн оноо: ${score}`, width / 2, height / 2 + 240);

    textSize(40);
    drawTextOutline("Дахин эхлэхийн тулд 'R' дарна уу (эсвэл дэлгэц хүрнэ)", width / 2, height / 2 + 330, '#0004ff');
    fill(255);
    text("Дахин эхлэхийн тулд 'R' дарна уу (эсвэл дэлгэц хүрнэ)", width / 2, height / 2 + 330);
}

function keyPressed() {
    if (
        (key === 'r' || key === 'R' || key === 'к' || key === 'К') &&
        gameState === "gameover"
    ) {
        resetGame();
    }
}

function resetGame() {
    score = 0;
    lives = 3;
    slowTimer = 0;
    freezeTimer = 0;
    gameState = "playing";
    foods = [];
    for (let i = 0; i < numFoods; i++) {
        foods.push(createRandomFood());
    }
}

