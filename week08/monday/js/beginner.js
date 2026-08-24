// Хувьсагчууд
let ballX = 50;        // Хил мөргөдөг бөмбөгний X
let ballSpeed = 4;     // Бөмбөгний хурд
let ballR = 20;        // Радиус

let playerX = 250;     // Товчлуураар удирдах бөмбөгний X
let playerY = 150;     // Товчлуураар удирдах бөмбөгний Y
let step = 5;          // Шижигдэх алхам

let bgColor = 220;     // Санамсаргүй солигдох дэвсгэрийн өнгө

function setup() {
  createCanvas(500, 300);
}

function draw() {
  // 1. Дэвсгэр будах (Дасгал 1, 8)
  background(bgColor);

  // 2. Статик дүрсүүд - Байшин ба Нар (Дасгал 2, 3)
  stroke(0);
  strokeWeight(2);
  fill(255, 200, 100);
  rect(150, 120, 120, 100); // Хана

  line(150, 120, 210, 70);  // Дээвэр
  line(210, 70, 270, 120);

  fill(255, 255, 100);
  circle(80, 70, 50);       // Нар

  fill(100, 200, 255);
  circle(210, 160, 30);     // Цонх

  // 3. Хил мөргөдөг бөмбөгний хөдөлгөөн (Дасгал 6, 7)
  fill(255, 80, 80);
  circle(ballX, 50, ballR * 2);
  ballX += ballSpeed;

  // Хана мөргөөд буцах нөхцөл
  if (ballX > width - ballR || ballX < ballR) {
    ballSpeed = -ballSpeed;
  }

  // 4. Keyboard-оор удирдах бөмбөг & Хил хязгаар (Дасгал 9)
  if (keyIsDown(LEFT_ARROW) && playerX > 20) playerX -= step;
  if (keyIsDown(RIGHT_ARROW) && playerX < width - 20) playerX += step;
  if (keyIsDown(UP_ARROW) && playerY > 20) playerY -= step;
  if (keyIsDown(DOWN_ARROW) && playerY < height - 20) playerY += step;

  fill(50, 150, 255);
  strokeWeight(3);
  stroke(255);
  circle(playerX, playerY, 40);

  // 5. Хулганыг дагах ба X байрлалаас хамаарч өнгө солигдох (Дасгал 4, 5)
  noStroke();
  fill(mouseX / 2, 100, 200, 150);
  circle(mouseX, mouseY, 25);
}

// 6. Хулгана дарахад дэвсгэрийн өнгө солигдох (Дасгал 8)
function mousePressed() {
  bgColor = color(random(255), random(255), random(255));
}