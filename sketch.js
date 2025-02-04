// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/challenges/116-lissajous-curve-table

function make2DArray(rows, cols) {
  var arr = new Array(rows); //like arr[]; but with number of columns hardcoded
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
}

const w = 240;
const cols = 2;
const rows = 2;
let angle = 0;

let curves;

const clockObj = {
  center: [
    [[w * 3 / 2, w / 2], [w * 5 / 2, w / 2]],
    [[w * 1 / 2, w * 3 / 2], [w * 1 / 2, w * 5 / 2]]
  ],

  orbitSpeed: [
    [2/50, 2/50],
    [3/50, 3/50]
  ],
  
  orbitPhase: [
    [Math.PI, 0],
    [0, Math.PI]
  ],

  orbitAngle: [
    [0, 0],
    [0, 0]
  ],
}

function setup() {
  createCanvas(800, 800);
  background(48, 37, 59);

  curves = make2DArray(rows,cols);
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      curves[j][i] = new Curve();
    }
  }
}

function draw() {
  background(48, 37, 59, 12);
  let d = w - 0.2 * w;
  let r = d / 2;

  noFill();
  stroke(255);

  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 2; i++) {
      let [cx, cy] = clockObj.center[j][i];
      strokeWeight(1);
      stroke(242, 193, 46, 28);
      //ellipse(cx, cy, d, d);     //draw circles (rows)

      fill(242, 193, 46, 28);
      textAlign(CENTER, CENTER);
      textSize(36);
      //text(clockObj.name[j][i], cx, cy - height / 100);     //draw name text

      noStroke();
      textSize(18);
      text(clockObj.orbitSpeed[j][i], cx, cy + height / 40);     //draw speed text

      textSize(36);
      text(floor(clockObj.orbitAngle[0][0]/Math.PI), 100, 100);

      noFill();
      
      let x = r * cos(clockObj.orbitAngle[j][i] - clockObj.orbitPhase[j][i]);
      let y = r * sin(clockObj.orbitAngle[j][i] - clockObj.orbitPhase[j][i]);
      strokeWeight(3);
      stroke(242, 193, 46);
      point(cx + x, cy + y);     //draw obrbiting point

      if (j == 0) {
        curves[0][i].setX(cx + x);
        curves[1][i].setX(cx + x);
      } else if (j == 1) {
        curves[i][0].setY(cy + y);
        curves[i][1].setY(cy + y);
      }

      clockObj.orbitAngle[j][i] += clockObj.orbitSpeed[j][i];
    }
  }

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      curves[j][i].addPoint();
      curves[j][i].show(j, i);
    }
  }

  if (clockObj.orbitAngle[0][0] >= Math.PI * 0 && clockObj.orbitAngle[0][0] < Math.PI * 4) { 
    curves[0][0].setAlpha(255);
  } else if (clockObj.orbitAngle[0][0] >= Math.PI * 4 && clockObj.orbitAngle[0][0] < Math.PI * 8) {
    curves[0][1].setAlpha(255);
  } else if (clockObj.orbitAngle[0][0] >= Math.PI * 8 && clockObj.orbitAngle[0][0] < Math.PI * 12) {
    curves[1][1].setAlpha(255); 
  } else if (clockObj.orbitAngle[0][0] >= Math.PI * 12 && clockObj.orbitAngle[0][0] < Math.PI * 24) {
    clockObj.orbitSpeed[0][0] = 3 / 50;
    clockObj.orbitSpeed[1][1] = 2 / 50;
  } else if (clockObj.orbitAngle[0][0] >= Math.PI * 24 && clockObj.orbitAngle[0][0] < Math.PI * 30) {
    curves[1][0].setAlpha(255); 
  } else if (clockObj.orbitAngle[0][0] >= Math.PI * 30) {
    clockObj.orbitSpeed[1][0] = 2.5 / 50;
    clockObj.orbitSpeed[0][1] = 5 / 50;
  }
}