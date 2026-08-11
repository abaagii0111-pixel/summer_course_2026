let particles = [];

function setup() {
    createCanvas(400, 400);
}

function createParticles(x, y) {
    return {
        x: x,
        y: y,
        vx: random(-2, 2),
        vy: random(-5, -1),
        size: random(5, 20),
        r: random(100, 255),
        g: random(10, 200),
        b: random(20, 150),
        life: 255
    };
}

function draw() {
    background(20);
    for (let i = 0; i < 3; i++) {
        particles.push(createParticles(200, 350))
    }

    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        fill(p.r, p.g, p.b, p.life);
        noStroke();
        circle(p.x, p.y, p.size);
        p.x = p.x + p.vx;
        p.y = p.y + p.vy;
        p.life = p.life - 2;
    }

    for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].life <= 0) {
            particles.splice(i, 1);
        }
    }

}