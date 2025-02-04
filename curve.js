class Curve {
  constructor() {
    this.path = [];
    this.current = createVector();
    this.alpha = 0;
  }

  setX(x) {
    this.current.x = x;
  }

  setY(y) {
    this.current.y = y;
  }

  addPoint() {
    this.path.push(this.current);
  }
  
  reset() {
    this.path = []; 
  }
  
  setAlpha(a) {
    this.alpha = a;
  }
  
  show(j, i) {
    strokeWeight(5);
    noFill();
    
    if (this.current.x > (i + 1 + 8.05 / 9) * w || this.current.x < (i + 1 + 0.95 / 9) * w) {
      stroke(242, 127, 61, this.alpha);
    } else if (this.current.y > (j + 1 + 8.05 / 9) * w || this.current.y < (j + 1 + 0.95 / 9) * w) { 
      stroke(242, 127, 61, this.alpha);
    } else {
      stroke(255, this.alpha);
    }
    point(this.current.x, this.current.y);
    this.current = createVector();
  }
}
  