function setup() {
    createCanvas(600, 800);
}

function draw() {
    background("#f2f2f2");
    fill("#1dba76");
    circle(300, 200, 120);

    // print(mouseX > 300);


    print(7 > 6); // false

    let a = 6;
    let b = 7;

    print(a >= b);
    print(a < b);
    print(a <= b);
    print('Hello');

    print(a == b);
    print(a === b);
    print(2 == '2');
    print(2 === '2')
    print(mouseX);

    if (mouseX > 300) {
        fill("#e40d0dff");
        circle(300, 200, 120);
    }
}