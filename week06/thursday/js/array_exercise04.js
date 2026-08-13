let cars = [];

function setup() {
    createCanvas(700, 450);

    let startY = 220;
    let gap = 45;

    for (let i = 0; i < 5; i++) {
        cars.push(
            {
                x: random(0, 300),
                y: startY + i * gap,
                speed: random(1, 6),
                width: random(50, 80),
                r: random(100, 255),
                g: random(10, 255),
                b: random(50, 255)
            }
        )
    }
}

function draw() {
    background('#87CEEB');

    noStroke();
    fill('#228B22');
    rect(0, 150, width, 300);

    fill('#555555');
    rect(0, 200, width, 230);

    fill('#fff');
    for (let x = 0; x < width; x += 40) {
        rect(x, 310, 20, 5);
    }

    for (let car of cars) {
        fill(car.r, car.g, car.b);
        rect(car.x, car.y, car.width, 25);

        fill('#000')
        circle(car.x + 15, car.y + 25, 12);
        circle(car.x + car.width - 15, car.y + 25, 12);

        car.x = car.x + car.speed;

        if (car.x > width) {
            car.x = -car.width;

            car.speed = random(2, 6);
            car.r = random(100, 255);
            car.g = random(100, 255);
            car.b = random(100, 255);
        }
    }
}