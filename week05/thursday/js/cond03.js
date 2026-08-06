function setup() {
    createCanvas(800, 400);
}

function draw() {
    if (mouseX > 600) {
        background("#00ff2fff");
    } else if (mouseX > 200) {
        background("#f60000ff");
    } else {
        background("#fbff00ff");
    }

    fill("#fff")
    circle(40, 40, 40)




}