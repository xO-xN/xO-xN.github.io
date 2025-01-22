let bodyA;
let bodyB;
let bodyC;

let typeA = 0;
let typeB = 1;
let typeC = 2;

const G = 2.4;

function setup() {
  createCanvas(800, 800);

  bodyA = new Body(width / 2, height * 1/5, 10, typeA);
  bodyB = new Body(width / 2, height * 4/5, 10, typeB);
  bodyC = new Body(width / 2, height * 1/2, 30, typeC);
  bodyA.vel = createVector(2,0);
  bodyB.vel = createVector(-2,0);
  bodyC.vel = createVector(0.01,0);
}

function draw() {
  background(220, 40);

  stroke(0);
  rect(width/2, height*1/5,1, height*3/5);

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