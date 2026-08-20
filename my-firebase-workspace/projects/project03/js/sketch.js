let score = 0;
let lives = 3;
let gameState = "playing"; 


let player = {
    x: 350,
    y: 430,
    w: 95,
    h: 35,
    speed: 10
};

let foods = [];
let numFoods = 7;

let goodEmojiList = ["🍎", "🍕", "🍔", "🍓", "🍩", "🍧","🌮"];
let badEmojiList = ["💣", "💩", "🦠"];

function setup() {
    createCanvas(700, 500);

    for (let i = 0; i < numFoods; i++) {
        foods.push(createRandomFood());
    }
}

function draw() {
    background('#6bb8d5');

    if (gameState === "playing") {
        movePlayer();
        drawPlayer();

        for (let i = 0; i < foods.length; i++) {
            updateFood(foods[i]);
            drawFood(foods[i]);

            if (checkCollision(foods[i])) {
                if (foods[i].type === "good") {
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

function createRandomFood() {
    let isGood = random(1) > 0.3;
    let foodType = isGood ? "good" : "bad";
    let foodSymbol = isGood ? random(goodEmojiList) : random(badEmojiList);

    return {
        x: random(35, width - 35),
        y: random(-200, -20),
        speed: random(2, 6),
        size: random(35, 50),
        type: foodType,
        symbol: foodSymbol
    };
}

function drawPlayer() {
    fill('#225c95');
    rectMode(CENTER);
    rect(player.x, player.y, player.w, player.h, 10);

    fill(255);
    textSize(15);
    textAlign(CENTER, CENTER);
    text("🧺 Cагс", player.x, player.y);
}

function movePlayer() {
    if (keyIsDown(LEFT_ARROW) && player.x - player.w / 2 > 0) {
        player.x -= player.speed;
    }
    if (keyIsDown(RIGHT_ARROW) && player.x + player.w / 2 < width) {
        player.x += player.speed;
    }
}

function drawFood(food) {
    textSize(food.size);
    textAlign(CENTER, CENTER);
    text(food.symbol, food.x, food.y);
}

// Хоолыг доошлуулах
function updateFood(food) {
    food.y += food.speed;
}

function checkCollision(food) {
    let d = dist(player.x, player.y, food.x, food.y);
    return d < (player.w / 3 + food.size / 2);
}

function drawHUD() {
    fill(0);
    textSize(20);
    textAlign(LEFT, TOP);
    text(`Оноо: ${score}`, 20, 20);
    text(`Амь: ${lives}`, 20, 45);
}

function drawGameOver() {
    fill(200, 0, 0);
    textAlign(CENTER, CENTER);
    textSize(45);
    text("Тоглоом дууслаа", width / 2, height / 2 - 20);

    fill(0);
    textSize(20);
    text(`Сүүлийн оноо: ${score}`, width / 2, height / 2 + 20);
    text("Дахин эхлэхийн тулд 'R' дарна уу ", width / 2, height / 2 + 60);
}

function keyPressed() {
    if ((key === 'r' || key === 'R') && gameState === "gameover") {
        resetGame();
    }
}

function resetGame() {
    score = 0;
    lives = 3;
    gameState = "playing";
    foods = [];
    for (let i = 0; i < numFoods; i++) {
        foods.push(createRandomFood());
    }
}