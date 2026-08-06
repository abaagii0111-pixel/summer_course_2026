let targetX;
let targetY;
let targetSize = 80;
let score = 0;

function setup() {
    createCanvas(400, 400);
    targetX = random(targetSize / 2, width - targetSize / 2);
    targetY = random(targetSize / 2, height - targetSize / 2);
}

function draw() {
    background(220);

    fill(255, 0, 0);
    ellipse(targetX, targetY, targetSize, targetSize);

    fill(0);
    textSize(20);
    text("Score: " + score, 10, 30);
}

function mousePressed() {
  let dx = mouseX - targetX;
  let dy = mouseY - targetY;
  let radius = targetSize / 2;

  if (dx * dx + dy * dy < radius * radius) {
    score++;
    targetX = random(targetSize / 2, width - targetSize / 2);
    targetY = random(targetSize / 2, height - targetSize / 2);
  } else {
    score--;
  }
}