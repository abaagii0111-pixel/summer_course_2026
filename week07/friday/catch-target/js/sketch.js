// State variables
let score = 0;
let lives = 3;
let targetX;
let targetY;
let targetSize = 100; // Easy-ээр эхэлнэ
let gameState = "waiting"; // "waiting", "playing", "gameOver"

// DOM Elements
let scoreElement;
let livesElement;
let difficultySelect;
let startButton;
let resetButton;

function setup() {
  const canvas = createCanvas(600, 400);
  canvas.parent("canvas-container");

  // DOM Element-үүдийг авах
  scoreElement = document.querySelector("#score-value");
  livesElement = document.querySelector("#lives-value");
  difficultySelect = document.querySelector("#difficulty-select");
  startButton = document.querySelector("#start-button");
  resetButton = document.querySelector("#reset-button");

  // Event Listeners
  startButton.addEventListener("click", startGame);
  resetButton.addEventListener("click", resetGame);
  difficultySelect.addEventListener("change", updateDifficulty);

  updateDifficulty();
}

function draw() {
  background(220);

  if (gameState === "waiting") {
    textAlign(CENTER, CENTER);
    textSize(24);
    fill(50);
    text("Press Start to Play!", width / 2, height / 2);
  } else if (gameState === "playing") {
    // Target зурах
    fill(255, 50, 50);
    noStroke();
    circle(targetX, targetY, targetSize);
  } else if (gameState === "gameOver") {
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(200, 0, 0);
    text("GAME OVER", width / 2, height / 2 - 20);
    textSize(20);
    fill(50);
    text("Final Score: " + score, width / 2, height / 2 + 20);
  }
}

function startGame() {
  score = 0;
  lives = 3;
  gameState = "playing";
  updateDOM();
  updateDifficulty();
  moveTarget();
}

function resetGame() {
  score = 0;
  lives = 3;
  gameState = "waiting";
  difficultySelect.value = "easy";
  updateDifficulty();
  updateDOM();
}

function moveTarget() {
  let radius = targetSize / 2;
  targetX = random(radius, width - radius);
  targetY = random(radius, height - radius);
}

function updateDifficulty() {
  const diff = difficultySelect.value;
  if (diff === "easy") {
    targetSize = 100;
  } else if (diff === "medium") {
    targetSize = 70;
  } else if (diff === "hard") {
    targetSize = 45;
  }
}

function updateDOM() {
  scoreElement.textContent = score;
  livesElement.textContent = lives;
}

function mousePressed() {
  // Зөвхөн Canvas дотор болон тоглох үед л даралтыг тооцно
  if (gameState !== "playing") return;
  if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) return;

  let distance = dist(mouseX, mouseY, targetX, targetY);

  if (distance < targetSize / 2) {
    // Зөв дарсан үед
    score++;
    updateDOM();
    moveTarget();
  } else {
    // Буруу дарсан үед
    lives--;
    updateDOM();
    if (lives <= 0) {
      gameState = "gameOver";
    }
  }
}