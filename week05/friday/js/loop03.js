function setup() {
    createCanvas(600, 400);

}

function draw() {
    background("#fff");
    stroke("#005effff")
    fill("#005effff");
    strokeWeight(3);

    for (let i = 0; i < 6; i++) {
        rect(100, 50 + i * 40, 15, 15);
    }

}