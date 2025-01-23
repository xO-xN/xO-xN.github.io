let bodyA;
let bodyB;
let bodyC;

let eventA;
let eventB;
let eventC;

let typeA = 0;
let typeB = 1;
let typeC = 2;

const G = 1.6;

function setup() {
  createCanvas(800, 800);

  eventA = new Timer(300, 8000);
  eventB = new Timer(8000, 8000);
  eventC = new Timer(16000, 8000);

  bodyA = new Body(width / 2, height * 1/5, 10, typeA);
  bodyB = new Body(width / 2, height * 4/5, 10, typeB);
  bodyC = new Body(width / 2, height * 1/2, 30, typeC);
  bodyA.vel = createVector(2,0);
  bodyB.vel = createVector(-2,0);
  bodyC.vel = createVector(0.01,0);
}

function draw() {
  background(220, 60);

  eventA.count();
  eventB.count();
  eventC.count();

  stroke(0); 
  strokeWeight(eventC.fadein);
  line(width / 2, height * 1 / 5, width / 2, height * 4 / 5);

  textAlign(CENTER, CENTER);
  text(nf(millis()/1000, 1, 1), width/2, 60);

  bodyA.attract(bodyB);
  bodyA.attract(bodyC);
  bodyB.attract(bodyA);
  bodyB.attract(bodyC);
  bodyC.attract(bodyA);
  bodyC.attract(bodyB);

  bodyA.update();
  bodyB.update();
  bodyC.update();
  bodyA.show();
  bodyB.show();
  bodyC.show();

  playerhint();
  midChecker();

  creditdisplay()
}