function setup() {
    createCanvas(600, 400);
}

function mousePressed() {

}


function draw() {
    if (mouseY < height / 2) {
        fill("#2ecc71")
      
    } else {
        fill(" #9b59b6")
       
    }

    background("#ffffffff")
    circle(width / 2, height / 2, 140);
}