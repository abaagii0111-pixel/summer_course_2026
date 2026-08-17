let particles = [];

let artPlan = {
    count: 50,
    speed: 3,
    palette: ['#FF5733', '#33FF57', '#3357FF', '#F3FF33']
};

function setup() {
    createCanvas(600, 400);
    buildScene(artPlan);
}

function draw() {
    background('#5d2525ff'); 

    for (let p of particles) {
        
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        fill(p.color);
        noStroke();
        circle(p.x, p.y, p.size);
    }
}

function buildScene(plan) {
    particles = [];

    for (let i = 0; i < plan.count; i++) {
        particles.push({
            x: random(width),
            y: random(height),
            size: random(20, 65),
            vx: random(-plan.speed, plan.speed),
            vy: random(-plan.speed, plan.speed),
            color: random(plan.palette)
        });
    }
}