const oceanPlan = {
    title: "Ocean",
    background: "#1b89f1ff",
    palette: ["#ff0000ff", "#2200ffff", "#f416c0ff"],
    shape: "triangle",
    count: 15,
    speed: 2.5
};

const calmPlan = {
    title: "Calm",
    background: "#081a2b",
    palette: ["#1e3a8a", "#3b82f6", "#60a5fa"],
    shape: "circle",
    count: 6,
    speed: 0.8
};

const energyPlan = {
    title: "Energy",
    background: "#ee7c0aff",
    palette: ["#ef4444", "#47f916ff", "#eab308"],
    shape: "square",
    count: 18,
    speed: 2
};

let artPlan = energyPlan;

function setup() {
    createCanvas(800, 400);
    buildScene(artPlan);
}

function draw() {
    background(artPlan.background);
    for (let p of particles) {
        updateParticle(p);
        drawParticle(p, artPlan.shape);
    }
}

function mousePressed() {
    if (artPlan.shape === "circle") {
        artPlan.shape = "square";
    } else {
        artPlan.shape = "circle";
    }

    buildScene(artPlan);
}

function updateParticle(particle) {
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < 0 || particle.x > width) particle.vx *= -1;
    if (particle.y < 0 || particle.y > height) particle.vy *= -1;
}

function buildScene(plan) {
    particles = [];
    for (let i = 0; i < plan.count; i++) {
        particles.push({
            x: random(width),
            y: random(height),
            size: random(20, 55),
            vx: random(-plan.speed, plan.speed),
            vy: random(-plan.speed, plan.speed),
            color: random(plan.palette)
        });
    }
}

function mousePressed() {
    if (artPlan.shape === "triangle") {
        artPlan.shape = "square";
    } else if (artPlan.shape === "square") {
        artPlan.shape = "circle";
    } else {
        artPlan.shape = "triangle";
    }

    buildScene(artPlan);
}

function drawParticle(particle, shape) {
    noStroke();
    fill(particle.color);

    if (shape === "square") {
        rectMode(CENTER);
        square(particle.x, particle.y, particle.size);
    } else if (shape === "triangle") {
        let h = (particle.size * Math.sqrt(3)) / 2;
        triangle(
            particle.x, particle.y - h / 2,
            particle.x - particle.size / 2, particle.y + h / 2,
            particle.x + particle.size / 2, particle.y + h / 2
        );
    } else {
        circle(particle.x, particle.y, particle.size);
    }
}