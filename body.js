class Body {
    constructor(x, y, m, t) {
      this.pos = createVector(x,y);
      this.vel = createVector(0,0);
      this.acc = createVector(0,0);
      this.mass = m;
      this.r = sqrt(this.mass) * PI;
      this.type = t;
    }
  
    attract(body) {
      let force = p5.Vector.sub(this.pos, body.pos);
      let d = constrain(force.mag(), 5, 25);
      let strength = (G * this.mass * body.mass) / (d * d);
      force.setMag(strength);
      body.applyForce(force);
    }
  
    applyForce(force) {
      let f = p5.Vector.div(force, this.mass);
      this.acc.add(f);
    }
  
    update() {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.set(0,0);
    }
  
    show() {   
      if (this.type == typeA) {
        //yellow
        fill(255, 236, 92);
        strokeWeight(0.4);
        stroke(0);
      } else if (this.type == typeB) {
        //green
        fill(180, 207, 102);
        strokeWeight(0.4);
        stroke(0);
      } else if (this.type == typeC) {
        //red
        fill(255, 90, 51);
        strokeWeight(1);
        stroke(0);
      }
      circle(this.pos.x, this.pos.y, this.r);
    }
  }