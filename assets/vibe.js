let x = 0
let y = 200
let z = 0
let vx = 0
let vy = 0
let vz = 0
let ship

let asteroids = []

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent("p5Canvas")
  noStroke()
  camera = createCamera();
  setCamera(camera);
   for (let i = 0; i < 200; i++) {
    asteroids.push(new Roid());
  }
}

function draw() {
  if (keyIsDown(LEFT_ARROW)) {
    vx -= 0.5;

  }
  if (keyIsDown(RIGHT_ARROW)) {
    vx += 0.5;

  }

  if (keyIsDown(UP_ARROW)) {
    vz -= 0.4;

  }

  if (keyIsDown(DOWN_ARROW)) {
    vz += 0.4;

  }
  if (keyIsDown(72)) {
    vy -= 0.4;

  }

  if (keyIsDown(78)) {
    vy += 0.4;

  }
  if (keyIsDown(32)) {
    x = 0
    y = 0
    z = 0
    vx = 0
    vy = 0
    vz = 0
  }
  //--------------------------------
  
  y += vy
  x += vx
  z += vz
  vy *= 0.97
  vx *= 0.97
  vz *= 0.97
  //--------------------------------
  
  background(173, 216, 230);
  
  push()
  translate(x, y, z)
  rotate(PI)
  rotateY(PI)
  fill(255, 0, 85)
  //cylinder(50, 10);
  pop()
  
  //---------------------------------
  for (let i = 0; i < asteroids.length; i++) {
    asteroids[i].display();
  }
  //---------------------------------
  
  camera.setPosition(x,y,z);
  
  
}

class Roid {
  constructor() {
    this.x = random(-800,800);
    this.y = random(-800,800);
    this.z = random(-10000);
    this.diameter = random(10, 100);
    
  }

  display() {
    push()
    stroke(255)
    strokeWeight(1)
    fill(255, 0, 85)
    translate(this.x,this.y,this.z)
    sphere(this.diameter);
    pop()
    
  }
}