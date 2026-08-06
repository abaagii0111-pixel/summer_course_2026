let faceX;
let faceY;
let faceSize = 165;
let eyeSize = 25;
let eyeDistance = 40;
let eyeYPosition = 30;
let mouthWidth = 75;

function setup() {
    createCanvas(600, 400)
}

function draw() {
    faceX = mouseX
    faceY = mouseY
    background("#860707ff");
    fill("#05f1b6ff");
    stroke(0);
    strokeWeight(2);
    circle(faceX, faceY, faceSize);

    fill(0);
    circle(faceX - eyeDistance, faceY - eyeYPosition, eyeSize);
    circle(faceX + eyeDistance, faceY - eyeYPosition, eyeSize);

    strokeWeight(3); 
    line(
      faceX - mouthWidth / 2, faceY + 25,
      faceX + mouthWidth / 2, faceY + 25
    );
}