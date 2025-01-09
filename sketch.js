function setup() {
  createCanvas(400, 400);
}

function draw() {
  noLoop();
  background(255, 0, 255);
  translate(width/2, height/2);
  beginShape();
  for(let i = 0; i < 10; i++) {
    const x = random(-100, 100);
    const y = random(-100, 100);
    vertex(x, y);
  }
  endShape();
}
