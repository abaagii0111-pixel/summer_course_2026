let count = 10;

function setup() {
  createCanvas(400, 400);
  
  let count = 50;
  print("setup dotorh count: " + count);
}

function draw() {
  background(220);

  fill(0, 255, 0);

  square(50, 50, count);
  print("draw dotorh count: " + count);
  noLoop();
}