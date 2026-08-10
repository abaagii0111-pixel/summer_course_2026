
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background("#a4e0f071");
    circle(50, 60, 80);
    sayHello();

    drawBall();
    drawBall();
    drawBall();
    drawBall();

    drawBall(130, 130);
    drawBall(190, 190);
    drawBall(250, 250);
    drawBall(310, 310);
    drawBall(370, 370);

    drawBall(370, 0, '#c60e0eff');
    drawBall(270, 100, '#28d22aff');
    drawBall(170, 200, '#d9ff00ff'); 
    drawBall(70, 300, '#5900ffff');  
    drawBall(20, 350, '#ff05e2ff');  
}

function sayHello() {
    console.log('Hello ');
}

function drawBall() {
    fill("#ff0c0cff");
    circle(50, 50, 40);
}

function drawBall(x, y) {
    circle(x, y, 40);
    fill("#ca2b2b");
}

function drawBall(x, y, color) {
    fill(color);
    circle(x, y, 50);
}