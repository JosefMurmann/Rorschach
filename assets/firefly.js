let swarm = []
let forest = []
let w = 600
let hl = 10
let hh = 60
let num = 150
let see = 0
let tree

function setup() {
 
    let canvas = createCanvas(windowWidth, windowHeight,WEBGL);
    canvas.parent("p5Canvas")
  c = createCamera();
  pos = createVector(0, -40, w)
  setCamera(c);
  perspective(PI/3, width/height, 0.01, 1200)
  for (let i = 0; i < num; i++) {
    swarm.push(new firefly())
  }
    for (let i = 0; i < 15; i++) {
    forest.push(new Tree())
  }
  frameRate(60)
  c.setPosition(pos.x, pos.y, pos.z)
}

function draw() {
  c.pan(see)
  if (keyIsDown(LEFT_ARROW)) {
    see = 0.01;

  } else if (keyIsDown(RIGHT_ARROW)) {
    see = -0.01;

  } else {
    see = 0
  }

  if (keyIsDown(UP_ARROW)) {
    c.move(0, 0, -1.7)

  }

  if (keyIsDown(DOWN_ARROW)) {
    c.move(0, 0, 1.2)

  }


  background(15,5,35);
  push()
  fill(0,10,0)
 box(w*2,-10,w*2)
  pop()
  for (let i = 0; i < num; i++) {
    swarm[i].draw()
  }
   for (let i = 0; i < 15; i++) {
    forest[i].draw()
  }

}

class firefly {
  constructor() {
    this.x = random(-w, w)
    this.z = random(-w, w)
    this.y = random(hl, hh)
    this.vx = random(-0.2, 0.2)
    this.vz = random(-0.2, 0.2)
    this.vy = random(0, 0.002)
    this.blinkoff = random(0, 6)
    this.yoff = random(0, 1)
    this.blink = 0

  }
  draw() {
    push()
    noStroke()
    this.x += this.vx
    this.y += this.vz
    this.y = sin(frameCount * this.vy+this.yoff) * 60
    this.blink = (sin(frameCount / 50 + this.blinkoff))
    fill(this.blink * 244, this.blink * 227, this.blink * 90)
    translate(this.x, -this.y, this.z)
     emissiveMaterial(this.blink * 244, this.blink * 227, this.blink * 90);

    sphere(1)
    pop()

    
    if (this.x > w || this.x < -w) {
      this.vx *= -1.1
    }
    if (this.z > w || this.z < -w) {
      this.vz *= -1.1
    }
  }
}
class Tree {
  constructor() {
    this.x = random(-w, w)
    this.z = random(-w, w)
    this.r = random(0,TWO_PI)
  }
  draw(){
    push()
    fill(0,5,0)
    scale(0.2)
    rotate(PI)
    translate(this.x*4,500,this.z*4)
    cylinder(100, 20000);
    pop()
  }
    
}