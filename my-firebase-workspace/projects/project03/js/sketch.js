let score = 0;
let lives = 3;
let gameState = "playing";

let player = {
    x: 750,
    y: 860,
    w: 140,
    h: 45,
    speed: 13
};

let foods = [];
let numFoods = 17;

let goodEmojiList = ["🍎", "🍕", "🍔", "🍓", "🍩", "🍧", "🌮", "🍰"];
let badEmojiList = ["💣", "💩", "🦠"];

function setup() {
    let canvas = createCanvas(1500, 940);

    canvas.elt.tabIndex = 0;
    canvas.elt.focus();

    bgImg = loadImage('./screenshots/catch-food.jpeg');

    for (let i = 0; i < numFoods; i++) {
        foods.push(createRandomFood());
    }
}
function draw() {
    clear();

    if (gameState === "playing") {
        movePlayer();
        drawPlayer();

        for (let i = 0; i < foods.length; i++) {
            updateFood(foods[i]);
            drawFood(foods[i]);

            // Мөргөлдөөн шалгах
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
    if (
        keyIsDown(LEFT_ARROW) ||
        (keyIsPressed && (key === 'a' || key === 'A' || key === 'ф' || key === 'Ф'))
    ) {
        if (player.x - player.w / 2 > 0) {
            player.x -= player.speed;
        }
    }

    if (
        keyIsDown(RIGHT_ARROW) ||
        (keyIsPressed && (key === 'd' || key === 'D' || key === 'в' || key === 'В'))
    ) {
        if (player.x + player.w / 2 < width) {
            player.x += player.speed;
        }
    }
}

function drawFood(food) {
    textSize(food.size);
    textAlign(CENTER, CENTER);
    text(food.symbol, food.x, food.y);
}

function updateFood(food) {
    food.y += food.speed;
}

function checkCollision(food) {
    let d = dist(player.x, player.y, food.x, food.y);
    return d < (player.w / 3 + food.size / 2);
}

function drawHUD() {
    fill(200);
    textSize(30);
    textAlign(LEFT, TOP);
    text(`Оноо: ${score}`, 30, 30);
    text(`Амь: ${lives}`, 30, 75);
}

function drawGameOver() {
    fill(200, 0, 0);
    textAlign(CENTER, CENTER);
    textSize(65);
    text("Тоглоом дууслаа", width / 2, height / 2 + 75);

    fill(220);
    textSize(40);
    text(`Сүүлийн оноо: ${score}`, width / 2, height / 2 + 135);
    text("Дахин эхлэхийн тулд 'R' дарна уу ", width / 2, height / 2 + 180);
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