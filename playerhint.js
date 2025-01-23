function playerhint() {
    textAlign(CENTER, CENTER);
    //player A (bodyA)
    stroke(0);
    strokeWeight(2);
    fill(255, 236, 92);
    textSize(100);
    text("A", 80, 80)

    //player B (bodyB)
    stroke(0);
    strokeWeight(2);
    fill(180, 207, 102);
    textSize(100);
    text("B", 720, 80);

    //player C (bodyC)
    stroke(0);
    strokeWeight(2);
    fill(255, 90, 51);
    textSize(100);
    text("C", 80, 720);

    //player acceleration
    //player A
    stroke(0);
    strokeWeight(eventB.fadein);
    fill(255, 236, 92, eventB.fadein*255);
    rect(130, 90, bodyA.vel.mag()*16, 10);

    //player B
    stroke(0);
    strokeWeight(eventB.fadein);
    fill(180, 207, 102, eventB.fadein*255);
    rect(670, 90, bodyB.vel.mag()*-16, 10);

    //player C
    stroke(0);
    strokeWeight(eventA.fadein);
    fill(255, 90, 51, eventA.fadein*255);
    rect(130, 730, bodyC.vel.mag()*16, 10);
}

function midChecker() {
    //bodyA
    if (bodyA.pos.x + bodyA.r/2 < width / 2 || bodyA.pos.x - bodyA.r/2 > width / 2) {
        noStroke();
        fill(220);
        circle(140, 60, 18);
    } else {
        stroke(0);
        strokeWeight(eventC.fadein);
        fill(255, 236, 92, eventC.fadein*255);
        circle(140, 60, 18);
    }

    //bodyB
    if (bodyB.pos.x + bodyB.r/2 < width / 2 || bodyB.pos.x - bodyB.r/2 > width / 2) {
        noStroke();
        fill(220);
        circle(660, 60, 18);
    } else {
        stroke(0);
        strokeWeight(eventC.fadein);
        fill(180, 207, 102, eventC.fadein*255);
        circle(660, 60, 18);
    }

    //bodyC
    if (bodyC.pos.x + bodyC.r/2 < width / 2 || bodyC.pos.x - bodyC.r/2 > width / 2) {
        noStroke();
        fill(220);
        circle(140, 700, 18);
    } else {
        stroke(0);
        strokeWeight(eventC.fadein);
        fill(255, 90, 51, eventC.fadein*255);
        circle(140, 700, 18);
    }
}