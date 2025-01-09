let xLoc = 50;
let xSpeed = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  xLoc = xLoc + xSpeed;
  if(xLoc > width - 50|| xLoc < 50){
    xSpeed = xSpeed * -1;
  }
  background(0, 0, 255);
  fill(255,0, 255);
  rect(xLoc, height/2, 100, 100);
  //print(xLoc);
}
