let scene = {
    size: 100,
    color: '#2498db',
    shape: 'circle'
};

function setup() {
    const canvas = createCanvas(600, 400);
    canvas.parent("canvas-container");

    const sizeSlider = document.querySelector('#size-slider');
    const colorInput = document.querySelector('#color-input');
    const shapeSelecter = document.querySelector('#shape-select'); // # тэмдэгт нэмэв

    colorInput.addEventListener('input', function () {
        scene.color = colorInput.value;
    });

    sizeSlider.addEventListener('input', function () {
        scene.size = Number(sizeSlider.value);
    });

    shapeSelecter.addEventListener('change', function () {
        scene.shape = shapeSelecter.value;
    });
}

function draw() {
    background('#f5f5f5')
    drawShape(width / 2, height / 2, scene.size, scene.color, scene.shape);
}

function drawShape(x, y, size, color, shape) {
    fill(color),
        noStroke();
    if (shape === 'square') {
        rectMode(CENTER);
        square(x, y, size);
    } else {
        circle(x, y, size)
    }
}