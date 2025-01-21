let values = [];

function setup() {
  createCanvas(400, 400);
  for (let index = 0; index < 100; index++) {
    values[index] = random(100);
    
  }
}

function draw() {
  background(255);
  fill(0);
  for (let i = 0; i < values.length; i++) {
    beginShape();
      vertex(80, i*10);
      quadraticVertex(0, values[i], 20, 140);
    endShape(CLOSE)
    
  }
// array.forEach(element => {
  
// });

}
