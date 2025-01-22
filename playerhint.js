function playerhint() {
    //player A (bodyA)
    stroke(5);
    fill(255, 236, 92);
    textSize(100);
    text("A", 40, 120)

    //player B (bodyB)
    stroke(5);
    fill(180, 207, 102);
    textSize(100);
    text("B", 700, 120);

    //player C (bodyC)
    stroke(5);
    fill(255, 90, 51);
    textSize(100);
    text("C", 40, 740);

    //player acceleration
    //player A
    stroke(0.1);
    fill(255, 236, 92);
    rect(120, 110, bodyA.vel.mag()*16, 10);

    //player B
    stroke(0.1);
    fill(180, 207, 102);
    rect(690, 110, bodyB.vel.mag()*-16, 10);

    //player C
    stroke(0.1);
    fill(255, 90, 51);
    rect(120, 730, bodyC.vel.mag()*16, 10);
}

function midChecker() {
    //bodyA
    if (bodyA.pos.x + bodyA.r/2 < width / 2 || bodyA.pos.x - bodyA.r/2 > width / 2) {
        noStroke();
        fill(220);
        circle(130, 80, 18);
    } else {
        stroke(1);
        fill(255, 236, 92);
        circle(130, 80, 18);
    }

    //bodyB
    if (bodyB.pos.x + bodyB.r/2 < width / 2 || bodyB.pos.x - bodyB.r/2 > width / 2) {
        noStroke();
        fill(220);
        circle(680, 80, 18);
    } else {
        stroke(1);
        fill(180, 207, 102);
        circle(680, 80, 18);
    }

    //bodyC
    if (bodyC.pos.x + bodyC.r/2 < width / 2 || bodyC.pos.x - bodyC.r/2 > width / 2) {
        noStroke();
        fill(220);
        circle(130, 700, 18);
    } else {
        stroke(1);
        fill(255, 90, 51);
        circle(130, 700, 18);
    }
}