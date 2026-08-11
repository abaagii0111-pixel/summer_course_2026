function setup() {
    createCanvas(600, 400);
}

function draw() {
    background('#f1f9deef');
    let ballX = width / 2
    let ballY = height / 2
    let mouseDistance = getDistance(mouseX, mouseY, ballX, ballY);

    if (mouseDistance < 100) {
        fill('red');   
    } else {
        fill('blue');  
    }

    circle(ballX, ballY, 50);
}

function getDistance(x1, y1, x2, y2) {
    return dist(x1, y1, x2, y2);

}